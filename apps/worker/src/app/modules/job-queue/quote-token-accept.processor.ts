import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { Processor } from '@nestjs/bull';
import { OnModuleInit } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

import { QUEUE_NAME_QUOTE_TOKEN_ACCEPT } from '../../constants/Job.constant';

import { logger } from '@/apps/worker/src/app/commons';
import { getSdk } from '@/apps/worker/src/app/generated/graphql';

@Processor(QUEUE_NAME_QUOTE_TOKEN_ACCEPT)
export class QuoteTokenAcceptProcessor implements OnModuleInit {
  private readonly endpoint = process.env.SUBGRAPH_URL_DEX;

  constructor(private readonly prisma: PrismaService) {}

  private getGraphqlClient() {
    return new GraphQLClient(this.endpoint);
  }
  private client = this.getGraphqlClient();

  private sdk = getSdk(this.client);

  async onModuleInit() {
    logger.info(`Call First Time Quote Token Access`);
    // await this.handleSyncDataAccessQuoteToken();
  }

  // @Cron(CronExpression.EVERY_10_SECONDS)
  async callEach10SecondSyncQuoteTokenAccept() {
    try {
      logger.info(`call per 10 seconds`); // Run the task once immediately upon service start
      await this.handleSyncDataAccessQuoteToken();
    } catch (error) {
      logger.error(
        `Sync data QuoteToken Accept Fail 10 seconds: ${JSON.stringify(error)}`,
      );
    }
  }

  async handleSyncDataAccessQuoteToken() {
    try {
      const response = await this.sdk.GetQuoteTokenAccept();
      if (response && response.tokens && response.tokens.length > 0) {
        await Promise.all(
          response.tokens.map(async (item) => {
            // console.log(item);
            await this.prisma.quoteTokens.upsert({
              where: {
                address: item.id,
              },
              create: {
                address: item.id,
                symbol: item.symbol,
                name: item.name,
                derivedETH: parseFloat(item.derivedETH),
                derivedUSD: parseFloat(item.derivedUSD),
              },
              update: {
                derivedETH: parseFloat(item.derivedETH),
                derivedUSD: parseFloat(item.derivedUSD),
              },
            });
          }),
        );
      }
      logger.info('Sync data quote token successful');
    } catch (error) {
      console.log(error);
      logger.error(`Sync data marketplace Fail: ${JSON.stringify(error)}`);
    }
  }
}
