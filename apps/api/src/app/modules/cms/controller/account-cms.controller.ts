import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Account } from '@prisma/client';

import { Role } from '../../../constants/enums/role.enum';
import { Roles } from '../../../decorators/roles.decorator';
import { AuthRoleGuard } from '../../auth/guards/authRole.guard';
import { RoleGuard } from '../../auth/guards/role.guard';
import { CreateAccountDto } from '../dto/create-account.dto';
import {
  ResetPasswordDto,
  UpdateAccountDto,
  UpdatePasswordDto,
  UpdateRolesDto,
} from '../dto/update-account.dto';
import { CMSService } from '../service/cms.service';

import { GetCurrentUser } from '@/apps/api/src/app/decorators/get-current-user.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('cms/account')
@ApiTags('cms/account')
export class AccountController {
  constructor(private readonly cmsService: CMSService) {}

  @Get('/get-roles')
  @Roles(Role.VIEWER)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async getRoleUgetRolesAccountser(@GetCurrentUser() account: Account) {
    return this.cmsService.getRolesAccount(account);
  }

  @Delete('/:id')
  @Roles(Role.ADMINISTRATOR)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async deleteAccount(
    @Param('id') id: string,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.deleteAccount(id, account);
  }

  @Post('/create-account')
  @Roles(Role.ADMINISTRATOR)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async CreateAccount(@Body() createDto: CreateAccountDto) {
    return this.cmsService.create(createDto);
  }

  @Put('/update-account')
  @Roles(Role.ADMINISTRATOR, Role.VIEWER)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async UpdateAccount(
    @Body() updateAccountDto: UpdateAccountDto,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.update(updateAccountDto, account);
  }

  @Put('/update-password')
  @Roles(Role.VIEWER)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async UpdatePassword(
    @Body() updatePasswordDto: UpdatePasswordDto,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.UpdatePassword(updatePasswordDto, account);
  }

  @Get('/get-detail/:id')
  @Roles(Role.VIEWER)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async findOne(@Param('id') id: string) {
    return this.cmsService.findOne(id);
  }

  @Get('/get-roles/:id')
  @Roles(Role.ADMINISTRATOR)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async findRolesByUser(@Param('id') id: string) {
    return this.cmsService.findRolesByUser(id);
  }

  @Put('/reset-password')
  @Roles(Role.ADMINISTRATOR)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async ResetPassword(
    @Body() resetPasswordDto: ResetPasswordDto,
    @GetCurrentUser() account: Account,
  ) {
    return this.cmsService.ResetPassword(resetPasswordDto, account);
  }

  @Put('/update-roles')
  @Roles(Role.ADMINISTRATOR)
  @UseGuards(AuthRoleGuard, RoleGuard)
  async ChangeRolesAccount(@Body() updateRolesDto: UpdateRolesDto) {
    return this.cmsService.ChangeRolesAccount(updateRolesDto);
  }
}
