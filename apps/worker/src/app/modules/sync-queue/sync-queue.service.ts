import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  SQSClient,
  ReceiveMessageCommand,
  DeleteMessageCommand,
} from '@aws-sdk/client-sqs';
import { config as dotenvConfig } from 'dotenv';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

dotenvConfig();

@Injectable()
export class SyncQueueService implements OnModuleInit {
  constructor(private prismaService: PrismaService) {}

  async receiveMessage() {
    const sqsClient = new SQSClient({
      region: 'ap-southeast-2',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      },
    });
    const queueUrl =
      'https://sqs.ap-southeast-2.amazonaws.com/368685833089/layerg-analytics-dev';
    const params = {
      QueueUrl: queueUrl,
      MaxNumberOfMessages: 1,
      WaitTimeSeconds: 20,
    };

    try {
      const data = await sqsClient.send(new ReceiveMessageCommand(params));
      if (data.Messages) {
        for (const message of data.Messages) {
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

          // Delete message after processing
          await sqsClient.send(
            new DeleteMessageCommand({
              QueueUrl: queueUrl,
              ReceiptHandle: message.ReceiptHandle,
            }),
          );
          console.log('Message deleted');
        }
      } else {
        console.log('No messages received');
      }
    } catch (err) {
      console.error('Error receiving message:', err);
    }
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
