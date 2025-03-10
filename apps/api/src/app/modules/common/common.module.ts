import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { CommonService } from './common.service';
import { CommonController } from './common.controller';

@Module({
  controllers: [CommonController],
  providers: [CommonService, PrismaService],
})
export class CommonModule {}
