import { Module } from '@nestjs/common';
import { PlatformOverviewService } from './platform-overview.service';
import { PlatformOverviewController } from './platform-overview.controller';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

@Module({
  controllers: [PlatformOverviewController],
  providers: [PlatformOverviewService, PrismaService],
})
export class PlatformOverviewModule {}
