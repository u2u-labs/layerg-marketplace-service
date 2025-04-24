import {
  ApiUAService,
  AuthResponseSocial,
  AuthResponseUA,
  ErrorUA,
  PrismaService,
  UAProfile,
} from '@layerg-mkp-workspace/shared/services';
import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ethers } from 'ethers';

import {
  CONNECT_UA_MESSAGE,
  LOGIN_MESSAGE,
} from '../../constants/web3Const/messages';
import { UserEntity } from '../user/entities/user.entity'; // import your User entity
import { UserService } from '../user/user.service';
import {
  ConnectSocialAuthDto,
  ConnectUAWalletDto,
  loginDto,
} from './dto/login.dto';

import { Provider } from '@/apps/api/src/app/constants/enums/provider.enum';
import { ConnectType } from '@/apps/api/src/app/constants/enums/TypeConnect.enum';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private userService: UserService,
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private redisService: RedisService,
    private apiUAService: ApiUAService,
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
      this.redisService.setKey(`session:${token}`, user.id);
    } else {
      this.redisService.deleteKey(`session:${token}`);
    }
  }

  async getTokens(signer: string, userId: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          payload: signer,
          type: 'ACCESS_TOKEN',
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '10m', // Access token expires in 10 minutes
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          payload: signer,
          type: 'REFRESH_TOKEN',
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: '7d', // Refresh token expires in 7 days
        },
      ),
    ]);
    const refreshTokenExpire = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const accessTokenExpire = Date.now() + 10 * 60 * 1000; // 10 minutes in milliseconds
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
      const signerAddr = await ethers.utils.verifyMessage(message, signature);
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

  async connectWallletUA(validateInfo: ConnectUAWalletDto) {
    try {
      const connectMessage = CONNECT_UA_MESSAGE();
      const { signature, publicKey, signer } = validateInfo;
      if (
        !(await this.isSignatureValid(connectMessage, signature, publicKey))
      ) {
        throw new BadRequestException('Signature invalid');
      }

      const response = await this.apiUAService.requestConnectWalletUA(
        signature,
        signer,
      );

      const {
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: uaId,
      } = response || {};
      if (!accessTokenUA) throw new InternalServerErrorException();
      let user = await this.prisma.user.findFirst({
        where: {
          signer: signer.toLowerCase(),
        },
      });

      if (!user) {
        user = await this.prisma.user.create({
          data: {
            signer: signer.toLowerCase(),
            publicKey,
            signature,
            signedMessage: connectMessage,
            uaId: String(uaId),
            mode: ConnectType.CONNECT_WALLET,
          },
        });
      }

      await this.upsertAAWallet(uaId, accessTokenUA, user.id);
      const {
        accessToken,
        refreshToken,
        accessTokenExpire,
        refreshTokenExpire,
        userId,
      } = await this.getTokens(user.signer?.toLowerCase(), user.id.toString());
      const dataTokenUA: AuthResponseUA = {
        uaId: uaId,
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: userId,
      };
      await this.redisService.updateDataTokenUA(
        dataTokenUA,
        refreshToken,
        false,
      );
      await this.updateRefreshTokenCaching(user, refreshToken, false);
      const aaWallets = await this.prisma.aAWallet.findMany({
        where: {
          userId: user.id,
        },
      });

      const appKeys = aaWallets.map((aaWallet) => aaWallet.appKey);

      const games = await this.prisma.gameLayerg.findMany({
        where: {
          appKey: {
            in: appKeys,
          },
        },
        select: {
          id: true,
          name: true,
          slug: true,
          nameSlug: true,
          avatar: true,
          appKey: true,
          apiKeyID: true,
        },
      });

      const aaWalletsMap = aaWallets.map((aaWallet) => ({
        ...aaWallet,
        isMKP: aaWallet.appKey === process.env.UA_MARKETPLACE_KEY,
      }));

      const mapped = aaWalletsMap.map((app) => ({
        ...app,
        game: games.find((game) => game.appKey === app.appKey) || null,
      }));
      return {
        refreshToken,
        refreshTokenExpire,
        accessToken,
        accessTokenExpire,
        userId: user?.id,
        uaId: uaId,
        mode: user.mode,
        aaWallets: mapped.filter(
          (wallet) => wallet.isMKP || wallet.game !== null,
        ),
      };
    } catch (error) {
      throw new HttpException(
        `Error connectWallletUA: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async refreshTokenUA(irefreshToken: string) {
    // Get Token UA From UserID
    const dataUserId = await this.redisService.getKey(
      `session:${irefreshToken}`,
    );

    if (!dataUserId) {
      throw new NotFoundException('User Information Not Found');
    }
    const user = await this.prisma.user.findUnique({
      where: {
        id: dataUserId,
      },
    });
    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    // const dataUa = (await this.redisService.getKeyObject(
    //   `session-UA:${dataUserId}`,
    // )) as any as AuthResponseUA;

    // if (!dataUa) {
    //   throw new NotFoundException('UA Information Not Found');
    // }

    // const response = await this.apiUAService.requestRefeshTokenUA(
    //   dataUa.refreshToken,
    // );
    // const {
    //   refreshToken: refreshTokenUA,
    //   refreshTokenExpire: refreshTokenExpireUA,
    //   accessToken: accessTokenUA,
    //   accessTokenExpire: accessTokenExpireUA,
    //   userId: uaId,
    // } = response || {};
    // if (!accessTokenUA) throw new InternalServerErrorException();

    const {
      accessToken,
      refreshToken,
      accessTokenExpire,
      refreshTokenExpire,
      userId,
    } = await this.getTokens(user.signer?.toLowerCase(), user.id.toString());
    // const dataTokenUA: AuthResponseUA = {
    //   uaId: uaId,
    //   refreshToken: refreshTokenUA,
    //   refreshTokenExpire: refreshTokenExpireUA,
    //   accessToken: accessTokenUA,
    //   accessTokenExpire: accessTokenExpireUA,
    //   userId: userId,
    // };

    // Remove Old Refesh Token
    // await this.updateRefreshTokenCaching(user, irefreshToken, true);
    // await this.updateDataTokenUA(dataTokenUA, userId, true);
    // Update New Refesh Token
    await this.updateRefreshTokenCaching(user, refreshToken, false);
    // await this.updateDataTokenUA(dataTokenUA, userId, false);

    return {
      refreshToken,
      refreshTokenExpire,
      accessToken,
      accessTokenExpire,
      userId: user?.id,
      uaId: user?.uaId,
      mode: user?.mode,
    };
  }

  async getLinkGoogleAuth() {
    try {
      const url = await this.apiUAService.requestGenLinkGoogle();
      if (!url) {
        throw new BadRequestException('Error get link google auth');
      }
      return {
        url,
        providerType: Provider.GOOGLE,
        message: 'Get Link Google Auth Successfully',
      };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Get Link Google Auth: ${
          error?.response?.data?.message || error.message
        }`,
        statusCode,
      );
    }
  }

  async getLinkFBAuth() {
    try {
      const url = await this.apiUAService.requestGenLinkFB();
      if (!url) {
        throw new BadRequestException('Error get Link Facebook Auth');
      }
      return {
        url,
        providerType: Provider.FACEBOOK,
        message: 'Get Link Facebook Auth Successfully',
      };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Get Link Facebook Auth: ${
          error?.response?.data?.message || error.message
        }`,
        statusCode,
      );
    }
  }

  async getLinkTwitterAuth() {
    try {
      const url = await this.apiUAService.requestGenLinkTwitter();
      if (!url) {
        throw new BadRequestException('Error get Link Twitter Auth');
      }
      // return url;
      return {
        url,
        providerType: Provider.TWITTER,
        message: 'Get Link twitter Auth Successfully',
      };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Get Link Twitter Auth: ${
          error?.response?.data?.message || error.message
        }`,
        statusCode,
      );
    }
  }

  async getLinkTelegramAuth() {
    try {
      const url = await this.apiUAService.requestGenLinkTelegram();
      if (!url) {
        throw new BadRequestException('Error get Link Telegram Auth');
      }
      // return url;
      return {
        url,
        providerType: Provider.TELEGRAM,
        message: 'Get Link Telegram Auth Successfully',
      };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Get Link Telegram Auth: ${
          error?.response?.data?.message || error.message
        }`,
        statusCode,
      );
    }
  }

  async connectGoogleAuth(input: ConnectSocialAuthDto) {
    try {
      const { code, state, error } = input;
      const response = await this.apiUAService.requestConnectGoogleUA(
        code,
        state,
        error,
      );
      const {
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: uaId,
        user: userUA,
      } = (response as AuthResponseSocial).data || {};

      if (!accessTokenUA) {
        const {
          success,
          message,
          error: errorUA,
          statusCode: statusCodeUA,
        } = response as ErrorUA;

        throw new HttpException(
          errorUA || 'Unknown error occurred',
          Number(statusCodeUA) || HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.prisma.user.upsert({
        where: { signer: userUA?.googleId },
        update: {
          publicKey: userUA?.googleId,
          uaId: String(uaId),
          email: userUA?.googleEmail,
          username: `${userUA?.googleFirstName} ${userUA?.googleLastName}`,
          avatar: `${userUA?.googleAvatarUrl}`,
          mode: ConnectType.CONNECT_GOOGLE,
          type: userUA?.type,
        },
        create: {
          signer: userUA?.googleId,
          publicKey: userUA?.googleId,
          email: userUA?.googleEmail,
          username: `${userUA?.googleFirstName} ${userUA?.googleLastName}`,
          avatar: `${userUA?.googleAvatarUrl}`,
          uaId: String(uaId),
          mode: ConnectType.CONNECT_GOOGLE,
          type: userUA?.type,
        },
      });

      await this.upsertAAWallet(uaId, accessTokenUA, user.id);
      const {
        accessToken,
        refreshToken,
        accessTokenExpire,
        refreshTokenExpire,
        userId,
      } = await this.getTokens(user.signer?.toLowerCase(), user.id.toString());
      const dataTokenUA: AuthResponseUA = {
        uaId: uaId,
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: userId,
      };
      await this.updateRefreshTokenCaching(user, refreshToken);
      await this.redisService.updateDataTokenUA(dataTokenUA, userId, false);

      const aaWallets = await this.prisma.aAWallet.findMany({
        where: {
          userId: user.id,
        },
      });
      const appKeys = aaWallets.map((aaWallet) => aaWallet.appKey);

      const games = await this.prisma.gameLayerg.findMany({
        where: {
          appKey: {
            in: appKeys,
          },
        },
        select: {
          id: true,
          name: true,
          slug: true,
          nameSlug: true,
          avatar: true,
          appKey: true,
          apiKeyID: true,
        },
      });

      const aaWalletsMap = aaWallets.map((aaWallet) => ({
        ...aaWallet,
        isMKP: aaWallet.appKey === process.env.UA_MARKETPLACE_KEY,
      }));

      const mapped = aaWalletsMap.map((app) => ({
        ...app,
        game: games.find((game) => game.appKey === app.appKey) || null,
      }));

      return {
        refreshToken,
        refreshTokenExpire,
        accessToken,
        accessTokenExpire,
        userId: user?.id,
        uaId: uaId,
        mode: user.mode,
        aaWallets: mapped.filter(
          (wallet) => wallet.isMKP || wallet.game !== null,
        ),
      };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Connect Google Auth: ${
          error?.response?.data?.message || error.message
        }`,
        statusCode,
      );
    }
  }

  async connectTelegramUA(input: ConnectSocialAuthDto) {
    try {
      const { code, state, error } = input;
      const response = await this.apiUAService.requestConnectTeleUA(
        code,
        state,
        error,
      );
      const {
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: uaId,
        user: userUA,
      } = (response as AuthResponseSocial).data || {};

      if (!accessTokenUA) {
        const {
          success,
          message,
          error: errorUA,
          statusCode: statusCodeUA,
        } = response as ErrorUA;

        throw new HttpException(
          message || 'Unknown error occurred',
          Number(statusCodeUA) || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const user = await this.prisma.user.upsert({
        where: { signer: userUA?.telegramId },
        update: {
          publicKey: userUA?.telegramId,
          uaId: String(uaId),
          mode: ConnectType.CONNECT_TELEGRAM,
          username: userUA?.telegramUsername,
          type: userUA?.type,
        },
        create: {
          signer: userUA?.telegramId,
          publicKey: userUA?.telegramId,
          uaId: String(uaId),
          username: userUA?.telegramUsername,
          mode: ConnectType.CONNECT_TELEGRAM,
          type: userUA?.type,
        },
      });

      await this.upsertAAWallet(uaId, accessTokenUA, user.id);

      const {
        accessToken,
        refreshToken,
        accessTokenExpire,
        refreshTokenExpire,
        userId,
      } = await this.getTokens(user.signer?.toLowerCase(), user.id.toString());
      const dataTokenUA: AuthResponseUA = {
        uaId: uaId,
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: userId,
      };
      await this.updateRefreshTokenCaching(user, refreshToken);
      await this.redisService.updateDataTokenUA(dataTokenUA, userId, false);
      const aaWallets = await this.prisma.aAWallet.findMany({
        where: {
          userId: user.id,
        },
      });

      const appKeys = aaWallets.map((aaWallet) => aaWallet.appKey);

      const games = await this.prisma.gameLayerg.findMany({
        where: {
          appKey: {
            in: appKeys,
          },
        },
        select: {
          id: true,
          name: true,
          slug: true,
          nameSlug: true,
          avatar: true,
          appKey: true,
          apiKeyID: true,
        },
      });

      const aaWalletsMap = aaWallets.map((aaWallet) => ({
        ...aaWallet,
        isMKP: aaWallet.appKey === process.env.UA_MARKETPLACE_KEY,
      }));

      const mapped = aaWalletsMap.map((app) => ({
        ...app,
        game: games.find((game) => game.appKey === app.appKey) || null,
      }));

      return {
        refreshToken,
        refreshTokenExpire,
        accessToken,
        accessTokenExpire,
        userId: user?.id,
        uaId: uaId,
        mode: user.mode,
        aaWallets: mapped.filter(
          (wallet) => wallet.isMKP || wallet.game !== null,
        ),
      };
    } catch (error) {
      throw new HttpException(
        `Error connectTelegramUA: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async connectTwitterAuth(input: ConnectSocialAuthDto) {
    try {
      const { code, state, error } = input;
      const response = await this.apiUAService.requestConnectTwitterUA(
        code,
        state,
        error,
      );
      const {
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: uaId,
        user: userUA,
      } = (response as AuthResponseSocial).data || {};

      if (!accessTokenUA) {
        const {
          success,
          message,
          error: errorUA,
          statusCode: statusCodeUA,
        } = response as ErrorUA;

        throw new HttpException(
          message || 'Unknown error occurred',
          Number(statusCodeUA) || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const user = await this.prisma.user.upsert({
        where: { signer: userUA?.twitterId },
        update: {
          publicKey: userUA?.twitterId,
          uaId: String(uaId),
          mode: ConnectType.CONNECT_TWITTER,
          username: `${userUA?.twitterFirstName} ${userUA?.twitterLastName}`,
          avatar: userUA?.twitterAvatarUrl,
          type: userUA?.type,
        },
        create: {
          signer: userUA?.twitterId,
          publicKey: userUA?.twitterId,
          uaId: String(uaId),
          mode: ConnectType.CONNECT_TWITTER,
          username: `${userUA?.twitterFirstName} ${userUA?.twitterLastName}`,
          avatar: userUA?.twitterAvatarUrl,
          type: userUA?.type,
        },
      });
      await this.upsertAAWallet(uaId, accessTokenUA, user.id);

      const {
        accessToken,
        refreshToken,
        accessTokenExpire,
        refreshTokenExpire,
        userId,
      } = await this.getTokens(user.signer?.toLowerCase(), user.id.toString());
      const dataTokenUA: AuthResponseUA = {
        uaId: uaId,
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: userId,
      };
      await this.updateRefreshTokenCaching(user, refreshToken);
      await this.redisService.updateDataTokenUA(dataTokenUA, userId, false);

      const aaWallets = await this.prisma.aAWallet.findMany({
        where: {
          userId: user.id,
        },
      });
      const appKeys = aaWallets.map((aaWallet) => aaWallet.appKey);

      const games = await this.prisma.gameLayerg.findMany({
        where: {
          appKey: {
            in: appKeys,
          },
        },
        select: {
          id: true,
          name: true,
          slug: true,
          nameSlug: true,
          avatar: true,
          appKey: true,
          apiKeyID: true,
        },
      });

      const aaWalletsMap = aaWallets.map((aaWallet) => ({
        ...aaWallet,
        isMKP: aaWallet.appKey === process.env.UA_MARKETPLACE_KEY,
      }));

      const mapped = aaWalletsMap.map((app) => ({
        ...app,
        game: games.find((game) => game.appKey === app.appKey) || null,
      }));
      return {
        refreshToken,
        refreshTokenExpire,
        accessToken,
        accessTokenExpire,
        userId: user?.id,
        uaId: uaId,
        mode: user.mode,
        aaWallets: mapped.filter(
          (wallet) => wallet.isMKP || wallet.game !== null,
        ),
      };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Connect Twitter Auth: ${
          error?.response?.data?.message || error.message
        }`,
        statusCode,
      );
    }
  }

  async connectFBAuth(input: ConnectSocialAuthDto) {
    try {
      const { code, state, error } = input;
      const response = await this.apiUAService.requestConnectFBUA(
        code,
        state,
        error,
      );
      const {
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: uaId,
        user: userUA,
      } = (response as AuthResponseSocial).data || {};

      if (!accessTokenUA) {
        const {
          success,
          message,
          error: errorUA,
          statusCode: statusCodeUA,
        } = response as ErrorUA;

        throw new HttpException(
          message || 'Unknown error occurred',
          Number(statusCodeUA) || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      let user = await this.prisma.user.findFirst({
        where: {
          signer: userUA?.facebookId,
        },
      });

      if (!user) {
        user = await this.prisma.user.upsert({
          where: { signer: userUA?.facebookId },
          update: {
            publicKey: userUA?.facebookId,
            uaId: String(uaId),
            mode: ConnectType.CONNECT_FACEBOOK,
            type: userUA?.type,
          },
          create: {
            signer: userUA?.facebookId,
            publicKey: userUA?.facebookId,
            uaId: String(uaId),
            mode: ConnectType.CONNECT_FACEBOOK,
            type: userUA?.type,
          },
        });
      }
      await this.upsertAAWallet(uaId, accessTokenUA, user.id);
      const {
        accessToken,
        refreshToken,
        accessTokenExpire,
        refreshTokenExpire,
        userId,
      } = await this.getTokens(user.signer?.toLowerCase(), user.id.toString());
      const dataTokenUA: AuthResponseUA = {
        uaId: uaId,
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: userId,
      };
      await this.updateRefreshTokenCaching(user, refreshToken);
      await this.redisService.updateDataTokenUA(dataTokenUA, userId, false);
      const aaWallets = await this.prisma.aAWallet.findMany({
        where: {
          userId: user.id,
        },
      });
      const appKeys = aaWallets.map((aaWallet) => aaWallet.appKey);

      const games = await this.prisma.gameLayerg.findMany({
        where: {
          appKey: {
            in: appKeys,
          },
        },
        select: {
          id: true,
          name: true,
          slug: true,
          nameSlug: true,
          avatar: true,
          appKey: true,
          apiKeyID: true,
        },
      });

      const aaWalletsMap = aaWallets.map((aaWallet) => ({
        ...aaWallet,
        isMKP: aaWallet.appKey === process.env.UA_MARKETPLACE_KEY,
      }));

      const mapped = aaWalletsMap.map((app) => ({
        ...app,
        game: games.find((game) => game.appKey === app.appKey) || null,
      }));
      return {
        refreshToken,
        refreshTokenExpire,
        accessToken,
        accessTokenExpire,
        userId: user?.id,
        uaId: uaId,
        mode: user.mode,
        aaWallets: mapped.filter(
          (wallet) => wallet.isMKP || wallet.game !== null,
        ),
      };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Connect Facebook Auth: ${
          error?.response?.data?.message || error.message
        }`,
        statusCode,
      );
    }
  }

  async getTokenUA(irefreshToken: string) {
    try {
      const dataUserId = await this.redisService.getKey(
        `session:${irefreshToken}`,
      );

      if (!dataUserId) {
        throw new NotFoundException('UA Information Not Found');
      }
      const user = await this.prisma.user.findUnique({
        where: {
          id: dataUserId,
        },
      });
      if (!user) {
        throw new ForbiddenException('Access Denied');
      }

      const dataUa = (await this.redisService.getKeyObject(
        `session-UA:${dataUserId}`,
      )) as any as AuthResponseUA;

      if (!dataUa) {
        throw new NotFoundException('UA Information Not Found');
      }

      const response = await this.apiUAService.requestRefeshTokenUA(
        dataUa.refreshToken,
      );
      return response;
    } catch (error) {
      throw new HttpException(
        `Error getTokenUA: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async upsertAAWallet(uaId: string, bearerToken: string, userId: string) {
    try {
      const userUAProfile: UAProfile =
        await this.apiUAService.requestUserProfileUA(uaId, bearerToken);

      if (!userUAProfile) {
        throw new NotFoundException('User UA Profile Not Found');
      }

      const { userInfo, aaWallet } = userUAProfile;
      const { telegramId, googleId, twitterId } = userInfo;

      if (aaWallet?.length > 0) {
        await this.prisma.$transaction(
          aaWallet.map((wallet) => {
            const { aaAddress, apps } = wallet;
            const appKey = Array.isArray(apps) ? apps[0]?.appKey : apps?.appKey; // Handles both array & object cases
            if (!appKey) return null;
            return this.prisma.aAWallet.upsert({
              where: {
                aaAddress_appKey: {
                  aaAddress: aaAddress.toLowerCase(),
                  appKey,
                },
              },
              update: { updatedAt: new Date() },
              create: {
                uaId,
                telegramId,
                googleId,
                twitterId,
                aaAddress: aaAddress.toLowerCase(),
                appKey,
                userId,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            });
          }),
        );
      }
    } catch (error) {
      throw new HttpException(
        `Error upserting AAWallets: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }
}
