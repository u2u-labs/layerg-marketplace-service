import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { Provider } from '@/apps/api/src/app/constants/enums/provider.enum';
import { AuthService } from './auth.service';
import {
  ConnectSocialAuthDto,
  ConnectUAWalletDto,
  GenerateProviderAuthDto,
  loginDto,
} from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('connect')
  async login(@Body() body: loginDto) {
    const user = await this.authService.validateUser(body);
    if (user) {
      return await this.authService.login(user);
    } else {
      return { message: 'Authentication failed' };
    }
  }

  @Post('connect-wallet-ua')
  async connectUA(@Body() body: ConnectUAWalletDto) {
    return await this.authService.connectWallletUA(body);
  }

  @Post('refresh')
  async refresh(@Body('refresh_token') token: string) {
    return this.authService.refreshTokens(token);
  }

  @Get('generate-provider-auth')
  async generateLinkProvider(@Query() query: GenerateProviderAuthDto) {
    const providerHandlers = {
      [Provider.TELEGRAM]: this.authService.getLinkTelegramAuth,
      [Provider.GOOGLE]: this.authService.getLinkGoogleAuth,
      [Provider.FACEBOOK]: this.authService.getLinkFBAuth,
      [Provider.TWITTER]: this.authService.getLinkTwitterAuth,
    };

    const handler = providerHandlers[query.providerType];

    if (handler) {
      return await handler.call(this.authService);
    }

    return { message: 'Invalid provider type' };
  }

  @Post('connect-provider-ua')
  async connectSocialAuth(@Body() body: ConnectSocialAuthDto) {
    const providerHandlers = {
      [Provider.TELEGRAM]: this.authService.connectTelegramUA,
      [Provider.GOOGLE]: this.authService.connectGoogleAuth,
      [Provider.FACEBOOK]: this.authService.connectFBAuth,
      [Provider.TWITTER]: this.authService.connectTwitterAuth,
    };

    const handler = providerHandlers[body.providerType];

    if (handler) {
      return await handler.call(this.authService, body);
    }

    return { message: 'Invalid provider type' };
  }
}
