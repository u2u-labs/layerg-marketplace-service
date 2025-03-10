import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { ApiCallerModule } from '../api-caller/api-caller.module';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService, PrismaService],
  imports: [ApiCallerModule],
})
export class WebhookModule {}
