import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { PlatformOverviewService } from './platform-overview.service';
import { PlatformOverviewController } from './platform-overview.controller';

@Module({
  controllers: [PlatformOverviewController],
  providers: [PlatformOverviewService, PrismaService],
})
export class PlatformOverviewModule {}
