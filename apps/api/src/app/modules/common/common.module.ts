import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

@Module({
  controllers: [CommonController],
  providers: [CommonService, PrismaService],
})
export class CommonModule {}
