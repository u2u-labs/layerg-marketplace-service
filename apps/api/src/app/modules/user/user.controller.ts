import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { AuthenticationCustomizeGuard } from '../auth/guards/authCustomize.guard';
import { findProjectsUserSubscribe } from '../launchpad/dto/find-project.dto';
import { ActivityService } from '../nft/activity.service';
import {
  GetActivityUserDto,
  GetFollowingDto,
  GetListBid,
} from './dto/activity-user.dto';
import { GetAllUser } from './dto/get-all-user.dto';
import { FilterNFTUserDetail } from './dto/get-nft-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SendVerifyEmailDto, VerifyEmailDto } from './dto/verify-email.dto';
import { UserServiceExtend } from './user-graph.service';
import { UserService } from './user.service';

import { GetCurrentUser } from '@/apps/api/src/app/decorators/get-current-user.decorator';
import { ApiTags } from '@nestjs/swagger';
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userServiceExtend: UserServiceExtend,
    private readonly activityService: ActivityService,
  ) {}

  @Post('profile')
  @UseGuards(AuthenticationGuard)
  async updateProfile(
    @Body() updateProfile: UpdateUserDto,
    @GetCurrentUser() user: User,
  ) {
    return await this.userService.updateProfile(updateProfile, user);
  }

  // @Get('profile/:id')
  // async getProfile(@Param('id') signer: string) {
  //   return await this.userService.findOneByWallet(signer);
  // }

  @Get('all')
  @UseGuards(AuthenticationCustomizeGuard)
  async getAllUser(@Query() filter: GetAllUser, @GetCurrentUser() user: User) {
    return await this.userService.findAll(filter, user);
  }

  @Get('/nft/:id')
  async getNFTWithUserID(
    @Param('id') id: string,
    @Query() filter: FilterNFTUserDetail,
  ) {
    return await this.userServiceExtend.getNFTByUser(id, filter);
  }

  @Get('/collection/:id')
  async getCollectionWithUserID(@Param('id') id: string) {
    return await this.userServiceExtend.getCollectionByUser(id);
  }

  @Get('profile/:id')
  @UseGuards(AuthenticationCustomizeGuard)
  async findWithShortLink(
    @Param('id') signer: string,
    @GetCurrentUser() user: User,
  ) {
    return await this.userService.getProfileWithShortLinkOrIdUser(signer, user);
  }

  @Get('/projects')
  async getProjectByUser(@Query() query: findProjectsUserSubscribe) {
    return await this.userService.getProjectByUser(query, query.userId);
  }

  @Post('/activity')
  findActivityNFT(@Body() input: GetActivityUserDto) {
    return this.userService.findActivityNFT(input);
  }

  @Post('/follow/:id')
  @UseGuards(AuthenticationCustomizeGuard)
  followUser(@Param('id') id: string, @GetCurrentUser() follower: User) {
    return this.userService.followUser(id, follower);
  }

  @Post('/send-verify-email')
  @UseGuards(AuthenticationGuard)
  async sendVerifyEmail(
    @GetCurrentUser() user: User,
    @Body() verifyEmailDto: SendVerifyEmailDto,
  ) {
    return await this.userService.sendverifyEmail(verifyEmailDto, user);
  }

  @Post('/verify-email')
  async verifyEmail(@Body() verifyEmailDto: VerifyEmailDto) {
    return await this.userService.checkVerifyEmail(verifyEmailDto);
  }

  @Post('/list-verify')
  @UseGuards(AuthenticationGuard)
  async checkListVerify(@GetCurrentUser() user: User) {
    return await this.userService.checkListVerify(user);
  }

  @Get('/list-following')
  @UseGuards(AuthenticationGuard)
  async getListFollowing(
    @GetCurrentUser() user: User,
    @Query() query: GetFollowingDto,
  ) {
    return await this.userService.getListFollowing(user, query);
  }

  @Get('/list-activity')
  @UseGuards(AuthenticationGuard)
  async getListUserBid(
    @GetCurrentUser() user: User,
    @Query() query: GetListBid,
  ) {
    return await this.userService.getListActivityWithEvent(user, query);
  }
}
