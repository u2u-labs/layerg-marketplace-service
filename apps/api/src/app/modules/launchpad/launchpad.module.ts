import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { LaunchpadService } from './launchpad.service';
import { LaunchpadController } from './launchpad.controller';

@Module({
  controllers: [LaunchpadController],
  providers: [LaunchpadService, PrismaService],
})
export class LaunchpadModule {}
