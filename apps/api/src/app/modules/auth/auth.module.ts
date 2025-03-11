import {
  ApiUAService,
  PrismaService,
} from '@layerg-mkp-workspace/shared/services';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { ActivityService } from '../nft/activity.service';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';

import { RedisService } from '@/shared/src/lib/services/redis/redis.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        signOptions: {
          expiresIn: '1d',
        },
        secret: process.env.JWT_SECRET,
      }),
    }),
    ConfigModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    GraphQlcallerService,
    ActivityService,
    PrismaService,
    JwtStrategy,
    RefreshTokenStrategy,
    LocalStrategy,
    RedisService,
    ApiUAService,
  ],
})
export class AuthModule {}
