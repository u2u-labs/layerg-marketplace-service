import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CheckStakingDto } from './dto/check-staking.dto';
import { FindAllProjectDto } from './dto/find-all-project.dto';
import { SubcribeProjectDto } from './dto/subcribe-project.dto';
import { LaunchpadService } from './launchpad.service';

import { ApiTags } from '@nestjs/swagger';

@Controller('launchpad')
@ApiTags('launchpad')
export class LaunchpadController {
  constructor(private readonly launchpadService: LaunchpadService) {}

  // @Post()
  // create(@Body() createLaunchpadDto: CreateLaunchpadDto) {
  //   return this.launchpadService.create(createLaunchpadDto);
  // }

  @Post('/job-config-round/:id')
  activateProject(@Param('id') id: string) {
    return this.launchpadService.configNextRound(id);
  }

  @Post('/subscribe')
  async subcribeProject(@Body() input: SubcribeProjectDto) {
    return await this.launchpadService.subcribeProject(input);
  }

  @Get('isSubscribed')
  async isSubscribed(
    @Query('walletAddress') walletAddress: string,
    @Query('projectId') projectId: string,
  ) {
    return await this.launchpadService.isSubscribed(walletAddress, projectId);
  }

  @Get()
  findAll(@Query() query: FindAllProjectDto) {
    return this.launchpadService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.launchpadService.findOne(id);
  }

  @Post()
  async checkStak(@Body() inputStaking: CheckStakingDto) {
    return await this.launchpadService.checkStaking(inputStaking);
  }
}
