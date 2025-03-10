import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ethers } from 'ethers';

import { LOGIN_MESSAGE } from '../../constants/web3Const/messages';
import { UserEntity } from '../user/entities/user.entity'; // import your User entity
import { UserService } from '../user/user.service';
import { loginDto } from './dto/login.dto';

import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private userService: UserService,
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {}

  async validateUser(validateInfo: loginDto): Promise<UserEntity> {
    const loginMessage = LOGIN_MESSAGE(validateInfo.date);
    const isSignatureValid = await this.isSignatureValid(
      loginMessage,
      validateInfo.signature,
      validateInfo.publicKey,
    );
    if (!isSignatureValid) {
      throw new BadRequestException('Signature invalid');
    }

    const user = await this.userService.findByPublicKey(validateInfo.publicKey);
    if (user) {
      return user;
    }

    // If the user does not exist yet, create a new user record
    if (!user) {
      const data = {
        ...validateInfo,
        signDate: new Date(validateInfo.date),
        signedMessage: loginMessage,
      };
      delete data.date;
      const newUser = await this.prisma.user.create({
        data,
      });
      return newUser;
    }
  }

  async refreshTokens(refreshToken: string) {
    const userId = await this.redisService.getKey(refreshToken);
    if (!userId) {
      throw new Error('Token not found');
    }
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new ForbiddenException('Access Denied');
    }
    const tokens = await this.getTokens(user.signer, user.id.toString());
    await this.updateRefreshTokenCaching(user, tokens.refreshToken);
    await this.updateRefreshTokenCaching(user, refreshToken, true);
    return tokens;
  }

  async updateRefreshTokenCaching(
    user: UserEntity,
    token: string,
    isLogout = false,
  ) {
    if (!isLogout) {
      this.redisService.setKey(user.id, token);
    } else {
      this.redisService.deleteKey(token);
    }
  }

  async getTokens(signer: string, userId: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          payload: signer,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '1d',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          payload: signer,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
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
      userId,
    };
  }

  async isSignatureValid(message, signature, address) {
    try {
      const signerAddr = await ethers.verifyMessage(message, signature);
      if (signerAddr !== address) {
        return false;
      }

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async login(user: UserEntity) {
    // Set user information in the session
    const {
      accessToken,
      refreshToken,
      accessTokenExpire,
      refreshTokenExpire,
      userId,
    } = await this.getTokens(user.signer, user.id.toString());
    await this.updateRefreshTokenCaching(user, refreshToken, false);
    if (!accessToken) throw new InternalServerErrorException();
    return {
      refreshToken,
      refreshTokenExpire,
      accessToken,
      accessTokenExpire,
      userId,
    };
  }
}
