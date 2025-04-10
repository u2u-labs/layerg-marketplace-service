import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { ApiTags } from '@nestjs/swagger';
import { GetCurrentUser } from '../../decorators/get-current-user.decorator';
import { AuthenticationGuard } from '../auth/guards/auth.guard';
import {
  CreatePlatformOverviewDto,
  PlatformOverviewFilter,
} from './dto/create-platform-overview.dto';
import { UpdatePlatformOverviewDto } from './dto/update-platform-overview.dto';
import { PlatformOverviewService } from './platform-overview.service';

@Controller('platform-overview')
@ApiTags('platform-overview')
export class PlatformOverviewController {
  constructor(
    private readonly platformOverviewService: PlatformOverviewService,
  ) {}

  @Post()
  @UseGuards(AuthenticationGuard)
  create(
    @Body() createPlatformOverviewDto: CreatePlatformOverviewDto,
    @GetCurrentUser() user: User,
  ) {
    return this.platformOverviewService.create(createPlatformOverviewDto, user);
  }

  @Get()
  findAll(@Query() filter: PlatformOverviewFilter) {
    return this.platformOverviewService.findAll(filter);
  }

  @Get(':nameSlug')
  findOne(
    @Param('nameSlug') nameSlug: string,
    @Query() filter: PlatformOverviewFilter,
  ) {
    return this.platformOverviewService.findOne(nameSlug, filter);
  }

  @Put(':nameSlug')
  @UseGuards(AuthenticationGuard)
  update(
    @Param('nameSlug') nameSlug: string,
    @Body() updatePlatformOverviewDto: UpdatePlatformOverviewDto,
    @GetCurrentUser() user: User,
  ) {
    return this.platformOverviewService.update(
      nameSlug,
      updatePlatformOverviewDto,
      user,
    );
  }

  @Delete(':nameSlug')
  @UseGuards(AuthenticationGuard)
  remove(@Param('nameSlug') nameSlug: string, @GetCurrentUser() user: User) {
    return this.platformOverviewService.remove(nameSlug, user);
  }
}
