import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { CreateGameDto } from '@/apps/api/src/app/modules/webhook/dto/create-game.dto';

@Injectable()
export class WebhookService {
  constructor(private readonly prisma: PrismaService) {}

  async createGame(createGameDto: CreateGameDto) {
    try {
      await this.prisma.gameLayerg.upsert({
        where: {
          id: createGameDto.id,
        },
        create: {
          ...createGameDto,
        },
        update: {
          ...createGameDto,
        },
      });
      return {
        message: 'Game updated successfully',
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        `${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
