import { Module } from '@nestjs/common';
import { ValidatorService } from './validator.service';
import { ValidatorController } from './validator.controller';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
@Module({
  providers: [ValidatorService, PrismaService],
  controllers: [ValidatorController],
})
export class ValidatorModule {}
