import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { ValidatorService } from './validator.service';
import { ValidatorController } from './validator.controller';
@Module({
  providers: [ValidatorService, PrismaService],
  controllers: [ValidatorController],
})
export class ValidatorModule {}
