import {
  DeleteMessageCommand,
  ReceiveMessageCommand,
  SQSClient,
} from '@aws-sdk/client-sqs';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { config as dotenvConfig } from 'dotenv';
import { logger } from '../../commons';

dotenvConfig();

@Injectable()
export class SyncQueueService implements OnModuleInit {
  constructor(private prismaService: PrismaService) {}

  private queueUrl =
    'https://sqs.ap-southeast-2.amazonaws.com/368685833089/layerg-sync-data-dev';
  private sqsClient = new SQSClient({
    region: 'ap-southeast-2',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
  });

  private params = {
    QueueUrl: this.queueUrl,
    MaxNumberOfMessages: 1,
    WaitTimeSeconds: 20,
    VisibilityTimeout: 10,
  };
  async receiveMessage() {
    try {
      const data = await this.sqsClient.send(
        new ReceiveMessageCommand(this.params),
      );
      if (data.Messages) {
        for (const message of data.Messages) {
          if (this.isValidJson(message.Body)) {
            const payload = JSON.parse(message.Body);
            switch (payload.type) {
              case 'upsert_game':
                if (payload?.data?.id) {
                  this.prismaService.gameLayerg.upsert({
                    where: {
                      id: payload.data.id,
                    },
                    update: {
                      ...payload.data,
                    },
                    create: {
                      ...payload.data,
                    },
                  });
                }
                break;
              case 'upsert_category':
                if (payload?.data?.id) {
                  this.prismaService.category.upsert({
                    where: {
                      id: payload.data.id,
                    },
                    update: {
                      ...payload.data,
                    },
                    create: {
                      ...payload.data,
                    },
                  });
                }
                break;
              default:
                break;
            }
            this.deleteMessage(message.ReceiptHandle);
          } else {
            this.deleteMessage(message.ReceiptHandle);
          }
        }
      } else {
        logger.info(`Sync queue logger: No messages received`);
      }
    } catch (err) {
      logger.error(`Error receiving message: ${err}`);
    }
  }

  isValidJson(input: string): boolean {
    try {
      JSON.parse(input);
      return true;
    } catch {
      return false;
    }
  }

  async deleteMessage(receiptHandle: string) {
    // Delete message after processing
    await this.sqsClient.send(
      new DeleteMessageCommand({
        QueueUrl: this.queueUrl,
        ReceiptHandle: receiptHandle,
      }),
    );
  }

  async pollMessages() {
    while (true) {
      await this.receiveMessage();
    }
  }

  onModuleInit() {
    this.pollMessages();
  }
}
