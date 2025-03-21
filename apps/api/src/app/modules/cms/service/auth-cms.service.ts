import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Account } from '@prisma/client';

import OtherCommon from '../../../commons/Other.common';
import { SignInDto } from '../dto/sign-in.dto';

import { RedisService } from '@/shared/src/lib/services/redis/redis.service';

@Injectable()
export class AuthCMSService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {}

  async updateRefreshTokenCachingAccount(
    user: Account,
    token: string,
    isLogout = false,
  ) {
    if (!isLogout) {
      this.redisService.setKey(user.id, token);
    } else {
      this.redisService.deleteKey(token);
    }
  }
  async refreshTokens(refreshToken: string) {
    try {
      const accountId = await this.redisService.getKey(refreshToken);
      if (!accountId) {
        throw new Error('Token not found');
      }
      const account = await this.prisma.account.findUnique({
        where: {
          id: accountId,
        },
      });
      if (!account) {
        throw new ForbiddenException('Access Denied');
      }
      const tokens = await this.getTokensAccount(account);
      await this.updateRefreshTokenCachingAccount(account, tokens.refreshToken);
      await this.updateRefreshTokenCachingAccount(account, refreshToken, true);
      return tokens;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getTokensAccount(data: Account) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: data.id,
          id: data.id,
          roles: data.roles,
          type: 'AccessToken',
        },
        {
          secret: this.configService.get<string>('JWT_SECRET_ADMIN'),
          expiresIn: '1d',
        },
      ),
      this.jwtService.signAsync(
        {
          id: data.id,
          roles: data.roles,
          type: 'RefreshToken',
        },
        {
          secret: this.configService.get<string>('JWT_SECRET_ADMIN'),
          expiresIn: '1d',
        },
      ),
    ]);
    const refreshTokenExpire = Date.now() + 1 * 24 * 3600 * 1000;
    const accessTokenExpire = Date.now() + 1 * 24 * 3600 * 1000;
    return {
      accessToken,
      refreshToken,
      refreshTokenExpire,
      accessTokenExpire,
    };
  }

  async signIn(signInDto: SignInDto) {
    try {
      const { username, password } = signInDto;
      const account = await this.prisma.account.findFirst({
        where: {
          AND: [
            { username: username },
            {
              isActive: true,
            },
            {
              isDelete: false,
            },
          ],
        },
      });
      if (!account) {
        throw new NotFoundException();
      }
      const verify = await OtherCommon.verifyPassword(
        password,
        account.password,
      );
      if (!verify) {
        throw new Error(
          'Your account or password is incorrect, please try again',
        );
      }
      const {
        accessToken,
        refreshToken,
        accessTokenExpire,
        refreshTokenExpire,
      } = await this.getTokensAccount(account);
      await this.updateRefreshTokenCachingAccount(account, refreshToken, false);
      if (!accessToken) throw new InternalServerErrorException();
      return {
        refreshToken,
        refreshTokenExpire,
        accessToken,
        accessTokenExpire,
        userId: account.id,
        accountId: account.id,
      };
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
