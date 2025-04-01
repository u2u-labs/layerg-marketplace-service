import { Module } from '@nestjs/common';
import { PageConfigService } from './page-config.service';
import { PageConfigController } from './page-config.controller';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

@Module({
  controllers: [PageConfigController],
  providers: [PageConfigService, PrismaService],
})
export class PageConfigModule {}
