import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { GetAllCollectionDto } from './dto/get-all-collection.dto';
import { GetAnalysisDto } from './dto/get-analysis-collection.dto';
import { GetCollectionByUserDto } from './dto/get-collection-by-user.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

import { GetCurrentUser } from '@/apps/api/src/app/decorators/get-current-user.decorator';
import { ApiTags } from '@nestjs/swagger';
import { GetCollectionsWithTopNftsDTO } from './dto/get-collections-with-top-nfts';
@Controller('collection')
@ApiTags('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  @UseGuards(AuthenticationGuard)
  create(
    @Body() createCollectionDto: CreateCollectionDto,
    @GetCurrentUser() user: User,
  ) {
    return this.collectionService.create(createCollectionDto, user);
  }

  @Post('/floor-price')
  updateFloorPrice(@Body() address: string) {
    return this.collectionService.updateFloorPrice(address);
  }

  @Get()
  findAll(@Query() input: GetAllCollectionDto) {
    return this.collectionService.findAll(input);
  }

  @Get('/analysis')
  getAnalysis(@Query() input: GetAnalysisDto) {
    return this.collectionService.getAnalysis(input);
  }

  @Get('/migrate')
  async migrate() {
    return this.collectionService.migrate();
  }

  @Get('/top-nfts')
  getCollectionsWithTopNfts(@Query() input: GetCollectionsWithTopNftsDTO) {
    return this.collectionService.getCollectionsWithTopNfts(input);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthenticationGuard)
  update(
    @Param('id') id: string,
    @GetCurrentUser() user: User,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    return this.collectionService.update(id, updateCollectionDto, user);
  }

  @Get('/user/:id')
  findByUserID(@Param('id') id: string) {
    return this.collectionService.getCollectionsByUserId(id);
  }
}
