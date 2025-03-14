import { GetCurrentUser } from '@/apps/api/src/app/decorators/get-current-user.decorator';
import { AuthenticationGuard } from '@/apps/api/src/app/modules/auth/guards/auth.guard';
import {
  RequestSignMessageDto,
  RequestVerifyMessageDto,
  TransactionRequestDto,
} from '@/apps/api/src/app/modules/onchain/dto/request-onchain.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { OnchainService } from './onchain.service';

@Controller('onchain')
export class OnchainController {
  constructor(private readonly onchainService: OnchainService) {}

  @Post('send')
  @UseGuards(AuthenticationGuard)
  create(@Body() input: TransactionRequestDto, @GetCurrentUser() user: User) {
    return this.onchainService.sendTx(input, user);
  }

  @Post('sign-message')
  @UseGuards(AuthenticationGuard)
  signMessage(
    @Body() input: RequestSignMessageDto,
    @GetCurrentUser() user: User,
  ) {
    return this.onchainService.signMessage(input, user);
  }

  @Post('verify-message')
  @UseGuards(AuthenticationGuard)
  verifyMessage(
    @Body() input: RequestVerifyMessageDto,
    @GetCurrentUser() user: User,
  ) {
    return this.onchainService.verifyMessage(input, user);
  }
}
