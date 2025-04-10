import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Account } from '@prisma/client';

import { Role } from '../../../constants/enums/role.enum';
import { Roles } from '../../../decorators/roles.decorator';
import { AuthRoleGuard } from '../../auth/guards/authRole.guard';
import { RoleGuard } from '../../auth/guards/role.guard';
import { GetSummaryDto } from '../dto/cms.dto';
import {
  CreateCollectionExternalDto,
  WebhookCollectionDto,
} from '../dto/create-collection-external.dto';
import {
  ActiveCollectionDto,
  ActiveNFTDto,
  ActiveUserDto,
  OptionDto,
  VerifyCollectionDto,
} from '../dto/marketplace.dto';
import { SignInDto } from '../dto/sign-in.dto';
import { AuthCMSService } from '../service/auth-cms.service';
import { CMSService } from '../service/cms.service';
import { CMSOptionService } from '../service/option-cms.service';

import { GetCurrentUser } from '@/apps/api/src/app/decorators/get-current-user.decorator';
import { KeyGuard } from '@/apps/api/src/app/modules/auth/guards/key.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('cms')
@ApiTags('cms')
export class CMSController {
  constructor(
    private readonly cmsService: CMSService,
    private readonly authCMSService: AuthCMSService,
    private readonly cmsOptionService: CMSOptionService,
  ) {}
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authCMSService.signIn(signInDto);
  }

  @Post('refesh-token')
  async refresh(@Body('refreshToken') token: string) {
    return this.authCMSService.refreshTokens(token);
  }

  @Post('/handle-active/nft')
  @Roles(Role.ADMINISTRATOR, Role.ADMIN_MARKETPLACE, Role.ADMIN_NFT)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async handleActiveNFT(
    @Body() query: ActiveNFTDto,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.handleActiveNFT(query, account);
  }

  @Post('/handle-active/collection')
  @Roles(Role.ADMINISTRATOR, Role.ADMIN_MARKETPLACE, Role.ADMIN_COLLECTION)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async handleActiveCollection(
    @Body() query: ActiveCollectionDto,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.handleActiveCollection(query, account);
  }

  @Post('/handle-active/user')
  @Roles(Role.ADMINISTRATOR, Role.ADMIN_MARKETPLACE, Role.ADMIN_USER)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async handleActiveUser(
    @Body() query: ActiveUserDto,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.handleActiveUser(query, account);
  }

  @Post('/handle-verify/collection')
  @Roles(Role.ADMINISTRATOR, Role.ADMIN_MARKETPLACE, Role.ADMIN_COLLECTION)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async handleVerifyCollection(
    @Body() query: VerifyCollectionDto,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.handleVerifyCollection(query, account);
  }

  @Get('/option/collection')
  async getOptionCollection(@Query() input: OptionDto) {
    return this.cmsOptionService.getCollectionOption(input);
  }

  @Get('/option/round')
  async getRoundOption(@Query() input: OptionDto) {
    return this.cmsOptionService.getRoundOption(input);
  }

  @Post('/summary')
  async getSummary(
    @Body() input: GetSummaryDto,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.getSummary(input);
  }

  @Post('/create-collection')
  @Roles(Role.ADMINISTRATOR, Role.ADMIN_NFT, Role.ADMIN_MARKETPLACE)
  @UseGuards(AuthRoleGuard, RoleGuard)
  createCollection(@Body() body: CreateCollectionExternalDto) {
    return this.cmsService.createCollectionExternal(body);
  }

  @Post('/webhook-collection')
  @UseGuards(KeyGuard)
  webhookCreate(@Body() input: WebhookCollectionDto) {
    return this.cmsService.webhookCreateCollection(input);
  }
}
