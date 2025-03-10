import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { PlatformTemplateService } from './platform-template.service';
import { PlatformTemplateController } from './platform-template.controller';

@Module({
  controllers: [PlatformTemplateController],
  providers: [PlatformTemplateService, PrismaService],
})
export class PlatformTemplateModule {}
