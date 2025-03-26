import {
  DeleteMessageCommand,
  ReceiveMessageCommand,
  SQSClient,
} from '@aws-sdk/client-sqs';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { CONTRACT_TYPE, TX_STATUS } from '@prisma/client';
import { logger } from '../../commons';

export interface ResUpsertCollection {
  type: string;
  data: DataCollection;
}

export interface ResUpsertCategory {
  type: string;
  data: DataCategory;
}

export interface ResUpsertGame {
  type: string;
  data: DataGame;
}

export interface DataCollection {
  collection: Collection;
  smc: Smc;
}

export interface DataCategory {
  category: Category;
}

export interface DataGame {
  game: Game;
  categories: Category[];
}

export interface Collection {
  id: string;
  createdAt: string;
  updatedAt: string;
  totalAssets: number;
  name: string;
  description: string;
  avatarUrl: string;
  projectId: string;
  nameSlug: string;
  slug: string;
  apiKeyID: string;
  SmartContract: any[];
}

export interface Smc {
  id: string;
  updatedAt: string;
  contractAddress: string;
  contractType: string;
  networkID: number;
  contractName: string;
  tokenSymbol: string;
  totalSupply: any;
  collectionId: string;
  deployedAt: any;
  nameSlug: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  avatar: string;
  banner: string;
  nameSlug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Game {
  id: string;
  createdAt: string;
  updatedAt: string;
  isEnabled: boolean;
  countFav: number;
  platform: string[];
  totalCls: number;
  name: string;
  gameIcon: string;
  banner: string;
  apiKeyID: string;
  telegram: string;
  facebook: string;
  instagram: string;
  discord: string;
  twitter: string;
  nameSlug: string;
  avatar: string;
  description: string;
  information: string;
  policy: string;
  version: string;
  slideShow: string[];
  totalReview: number;
  totalRating: number;
  slug: string;
  isRcm: boolean;
  userId: string;
}

export interface CategoryGame {
  id: string;
}

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
      if (!data.Messages) {
        return logger.info(`Sync queue logger: No messages received`);
      }

      for (const message of data.Messages) {
        if (!this.isValidJson(message.Body)) {
          this.deleteMessage(message.ReceiptHandle);
          continue;
        }

        const payload = JSON.parse(message.Body);
        const handlers = {
          upsert_game: (data: ResUpsertGame['data']) => this.upsertGame(data),
          upsert_category: (data: ResUpsertCategory['data']) =>
            this.upsertCate(data),
          upsert_collection: (data: ResUpsertCollection['data']) =>
            this.upsertCollection(data),
        };

        const handler = handlers[payload.type as keyof typeof handlers];
        if (handler && payload.data) {
          handler(payload.data);
        }
        this.deleteMessage(message.ReceiptHandle);
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

  async upsertCollection(payload: DataCollection) {
    const { collection, smc } = payload;
    const {
      id,
      name,
      description,
      totalAssets,
      avatarUrl,
      projectId,
      nameSlug,
      slug,
    } = collection;
    const { contractAddress, contractType, networkID, tokenSymbol } = smc;
    if (!id) return;

    const data = {
      name,
      description,
      avatar: avatarUrl,
      symbol: tokenSymbol,
      address: contractAddress,
      chainId: networkID,
      type:
        contractType === 'ERC721'
          ? CONTRACT_TYPE.ERC721
          : CONTRACT_TYPE.ERC1155,
      status: TX_STATUS.SUCCESS,
      nameSlug,
      shortUrl: slug,
      totalAssets,
      gameLayergId: projectId,
    };

    await this.prismaService.collection.upsert({
      where: { id },
      update: data,
      create: { id, ...data },
    });
  }

  async upsertCate(payload: DataCategory) {
    const { category } = payload;
    const { id, ...gameCate } = category;
    if (!id) return;

    await this.prismaService.category.upsert({
      where: {
        id,
      },
      update: gameCate,
      create: { id, ...gameCate },
    });
  }

  async upsertGame(payload: DataGame) {
    const { game, categories } = payload;
    const { id, ...gameData } = game;

    if (!id) return;
    await this.prismaService.gameLayerg.upsert({
      where: { id },
      update: gameData,
      create: { id, ...gameData },
    });

    await this.upsertGameCategory(id, categories);
  }

  async upsertGameCategory(gameId: string, categories: Category[]) {
    await this.prismaService.gameCategories.deleteMany({
      where: { gameId },
    });

    const gameCategories = categories.map((cate) => ({
      gameId,
      categoryId: cate.id,
    }));
    console.log(
      '🚀 ~ SyncQueueService ~ gameCategories ~ gameCategories:',
      gameCategories,
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
