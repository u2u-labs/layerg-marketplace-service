import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { AuthenticationCustomizeGuard } from '../auth/guards/authCustomize.guard';
import { GetActivityBase, GetHistoryOrderDto } from './dto/activity-nft.dto';
import { CreateNftDto } from './dto/create-nft.dto';
import { GetEventBase } from './dto/event-base.dto';
import { GetAllNftDto, GetSweepOrdersDto } from './dto/get-all-nft.dto';
import {
  GetGeneralInforAllDto,
  GetGeneralInforDto,
} from './dto/get-general-infor.dto';
import { GetTokenIdDto } from './dto/get-token-id.dto';
import { MarketplaceService } from './nft-marketplace.service';
import { NftService } from './nft.service';
import { TokenService } from './token.service';

import { GetCurrentUser } from '@/apps/api/src/app/decorators/get-current-user.decorator';
import { CollectionDetailDto } from '@/apps/api/src/app/modules/nft/dto/nft.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller('nft')
@ApiTags('nft')
export class NftController {
  constructor(
    private readonly nftService: NftService,
    private readonly tokenService: TokenService,
    private readonly eventService: MarketplaceService,
  ) {}

  @Get('/migrate')
  async migrate() {
    return await this.nftService.migrate();
  }

  @Get('crawl-nft-info')
  async crawlNftInfo(
    @Query('collectionAddress') address: string,
    @Query('txCreation') txCreation?: string,
  ) {
    return await this.nftService.crawlNftInfo(address, txCreation);
  }

  @Post()
  @UseGuards(AuthenticationGuard)
  create(@Body() createNftDto: CreateNftDto, @GetCurrentUser() user: User) {
    return this.nftService.create(createNftDto, user);
  }

  @Get('/tokenId')
  @UseGuards(AuthenticationGuard)
  getTokenId(@Query() input: GetTokenIdDto, @GetCurrentUser() user: User) {
    return this.tokenService.generateTokenId(
      user.publicKey,
      input.collectionAddress,
    );
  }

  @Post('/search')
  findall(@Body() query: GetAllNftDto) {
    return this.nftService.findAll(query);
  }

  @Get('/nftTransactionInfo')
  findNftsCurrentStatus(
    @Query('id') id: string,
    @Query('collectionAddress') collectionAddress: string,
    @Query('bidListPage') bidPage: number,
    @Query('bidListLimit') bidLimit: number,
  ) {
    return this.nftService.getNftDetailTransactionInfo(
      id,
      collectionAddress,
      bidPage,
      bidLimit,
    );
  }

  @Get('')
  findOne(@Query() query: CollectionDetailDto) {
    return this.nftService.findOne(query);
  }

  @Get('/user/:id')
  findNFTByUserID(@Param('id') id: string) {
    return this.nftService.findNFTByUserID(id);
  }

  @Post('/events')
  @UsePipes(new ValidationPipe({ transform: true }))
  findEvents(@Body() input: GetEventBase) {
    return this.eventService.findEvents1(input);
  }

  @Post('/activity')
  findActivityNFT(@Body() input: GetActivityBase) {
    return this.nftService.findActivityNFT(input);
  }
  @Post('/general-count')
  getGeneralInfor(@Body() query: GetGeneralInforDto) {
    return this.nftService.getGeneralInfor(query);
  }

  @Post('/general-infor')
  getGeneralInforAll(@Body() query: GetGeneralInforAllDto) {
    return this.nftService.getGeneralInforAll(query);
  }

  @Get('/history-prices')
  getHistoryPrices(@Query() query: GetHistoryOrderDto) {
    return this.nftService.getHistoryPrices(query);
  }
  @Get('/sweep-orders')
  @UseGuards(AuthenticationCustomizeGuard)
  getSweepOrders(
    @Query() query: GetSweepOrdersDto,
    @GetCurrentUser() user: User,
  ) {
    return this.nftService.getSweepOrders(query, user);
  }
}
