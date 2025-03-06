import { Module } from '@nestjs/common';
import { LaunchpadService } from './launchpad.service';
import { LaunchpadController } from './launchpad.controller';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

@Module({
  controllers: [LaunchpadController],
  providers: [LaunchpadService, PrismaService],
})
export class LaunchpadModule {}
