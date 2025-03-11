import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { WebhookService } from './webhook.service';
import { KeyGuard } from '@/apps/api/src/app/modules/auth/guards/key.guard';
import { CreateGameDto } from '@/apps/api/src/app/modules/webhook/dto/create-game.dto';

@Controller('webhook')
export class WebhookController {
  constructor(private webhookService: WebhookService) {}

  @Post('/create-game')
  @UseGuards(KeyGuard)
  createGame(@Body() createGameDto: CreateGameDto) {
    return this.webhookService.createGame(createGameDto);
  }
}
