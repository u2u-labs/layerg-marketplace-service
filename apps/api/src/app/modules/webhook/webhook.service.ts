import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { logger } from '@/apps/api/src/app/commons';

@Injectable()
export class WebhookService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

}
