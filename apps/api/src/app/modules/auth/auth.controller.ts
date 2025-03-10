import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';

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
  @Post('refresh')
  async refresh(@Body('refresh_token') token: string) {
    return this.authService.refreshTokens(token);
  }
}
