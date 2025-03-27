import {
  RequestSignMessageDto,
  RequestVerifyMessageDto,
  TransactionRequestDto,
} from '@/apps/api/src/app/modules/onchain/dto/request-onchain.dto';
import {
  ApiUAService,
  AuthResponseUA,
  PrismaService,
} from '@/shared/src/lib/services';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class OnchainService {
  constructor(
    private apiUAService: ApiUAService,
    private readonly redisService: RedisService,
    private readonly prisma: PrismaService,
  ) {}
  async sendTx(input: TransactionRequestDto, user: User) {
    try {
      const { chainId, sponsor, transactionReq, appApiKey } = input;
      const tokenUa = await this.getTokenUA(user);
      const response = await this.apiUAService.requestSendTx(
        chainId,
        sponsor,
        transactionReq,
        appApiKey,
        tokenUa.accessToken,
      );
      return response;
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Send Tx: ${error?.response?.data?.message || error.message}`,
        statusCode,
      );
    }
  }

  async signMessage(input: RequestSignMessageDto, user: User) {
    try {
      const { chainId, message, appApiKey } = input;
      const tokenUa = await this.getTokenUA(user);
      const response = await this.apiUAService.requestSignMessage(
        chainId,
        message,
        appApiKey,
        tokenUa.accessToken,
      );
      return response;
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Sign Message: ${error?.response?.data?.message || error.message}`,
        statusCode,
      );
    }
  }

  async verifyMessage(input: RequestVerifyMessageDto, user: User) {
    try {
      const { chainId, message, signature, appApiKey } = input;
      const tokenUa = await this.getTokenUA(user);
      const response = await this.apiUAService.requestVerifyMessage(
        chainId,
        message,
        signature,
        appApiKey,
        tokenUa.accessToken,
      );
      return response;
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error Verify Message: ${error?.response?.data?.message || error.message}`,
        statusCode,
      );
    }
  }

  async getTokenUA(iUser: User) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: iUser?.id,
        },
      });
      if (!user) {
        throw new ForbiddenException('Access Denied');
      }

      const dataUa = (await this.redisService.getKeyObject(
        `session-UA:${iUser?.id}`,
      )) as any as AuthResponseUA;

      if (!dataUa) {
        throw new NotFoundException('UA Information Not Found');
      }

      const tokenUa = await this.apiUAService.requestRefeshTokenUA(
        dataUa.refreshToken,
      );
      const {
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: uaId,
      } = tokenUa || {};
      if (!accessTokenUA) throw new InternalServerErrorException();

      const dataTokenUA: AuthResponseUA = {
        uaId: uaId,
        refreshToken: refreshTokenUA,
        refreshTokenExpire: refreshTokenExpireUA,
        accessToken: accessTokenUA,
        accessTokenExpire: accessTokenExpireUA,
        userId: user.id,
      };

      await this.updateDataTokenUA(dataTokenUA, user.id, true);
      await this.updateDataTokenUA(dataTokenUA, user.id, false);

      return tokenUa;
    } catch (error) {
      throw new HttpException(
        `Error Get Token UA: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }
  async updateDataTokenUA(
    data: AuthResponseUA,
    token: string,
    isLogout = false,
  ) {
    if (!isLogout) {
      this.redisService.setKeyObject(`session-UA:${token}`, data);
    } else {
      this.redisService.deleteKey(`session-UA:${token}`);
    }
  }
}
