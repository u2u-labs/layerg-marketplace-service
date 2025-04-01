import { Controller, Get, Param } from '@nestjs/common';
import { PageConfigService } from './page-config.service';

@Controller('page-config')
export class PageConfigController {
  constructor(private readonly pageConfigService: PageConfigService) {}

  @Get(':chainId')
  async tPageConfigByChainId(@Param('chainId') chainId: number) {
    return this.pageConfigService.getPageConfigByChainId(chainId);
  }
}
