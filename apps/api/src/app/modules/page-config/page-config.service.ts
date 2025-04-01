import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

@Injectable()
export class PageConfigService {
  constructor(private readonly prisma: PrismaService) {}

  async getPageConfigByChainId(chainId: number) {
    try {
      const contracts = await this.prisma.contractMarketplace.findMany({
        where: {
          chainId,
        },
      });
      const quoteTokens = await this.prisma.quoteTokens.findMany({
        where: {
          chainId,
        },
      });
      return {
        quoteTokens,
        contracts,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
