import {
  RequestSignMessageDto,
  RequestVerifyMessageDto,
  ResponseTokenUA,
  TransactionRequestDto,
} from '@/apps/api/src/app/modules/onchain/dto/request-onchain.dto';
import { ApiUAService } from '@/shared/src/lib/services';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class OnchainService {
  constructor(
    private apiUAService: ApiUAService,
    private readonly redisService: RedisService,
  ) {}
  async sendTx(input: TransactionRequestDto, user: User) {
    try {
      const { chainId, sponsor, transactionReq, appApiKey } = input;
      const responseRedis = await this.redisService.getKey(
        `session-UA:${user.id}`,
      );
      const tokenUa = JSON.parse(responseRedis) as ResponseTokenUA;
      if (!tokenUa && !tokenUa.accessToken) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

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
      const responseRedis = await this.redisService.getKey(
        `session-UA:${user.id}`,
      );
      const tokenUa = JSON.parse(responseRedis) as ResponseTokenUA;
      if (!tokenUa && !tokenUa.accessToken) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
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
      const responseRedis = await this.redisService.getKey(
        `session-UA:${user.id}`,
      );
      const tokenUa = JSON.parse(responseRedis) as ResponseTokenUA;
      if (!tokenUa && !tokenUa.accessToken) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
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
}
