import { LayerGAPI } from '@layerg-ua-sdk/aa-sdk';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, Method } from 'axios';

export interface UAProfile {
  id: number;
  createdAt: string;
  updatedAt: string;
  type: string;
  eoaWallet: string;
  encryptedPrivateKey: string;
  username: any;
  firstname: any;
  lastname: any;
  avatar: any;
  signature: any;
  primaryAAWallet: any;
  telegramId: string;
  telegramUsername: any;
  telegramFirstName: any;
  telegramLastName: any;
  telegramAvatarUrl: string;
  telegramAuthDate: string;
  telegramVerified: boolean;
  aaWallets: AaWallet[];
}

export interface AaWallet {
  id: number;
  createdAt: string;
  updatedAt: string;
  aaAddress: string;
  ownerAddress: string;
  factoryAddress: string;
  userId: number;
  chainId: number;
  isDeployed: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export type ApiConnectWallet = ApiResponse<DataConnectWallet>;
export type ApiConnectTele = ApiResponse<DataConnectTele>;
export type ApiSendOTP = ApiResponse<any>;

export interface DataConnectWallet {
  refreshToken: string;
  refreshTokenExpire: number;
  accessToken: string;
  accessTokenExpire: number;
  userId: string;
  apiKey: string;
}

export interface DataConnectTele {
  rs: TokenData;
  aaWallet: AccountAbstractionWallet;
}

export interface TokenData {
  refreshToken: string;
  refreshTokenExpire: number;
  accessToken: string;
  accessTokenExpire: number;
  userId: string;
  apiKey: string;
}

export interface AccountAbstractionWallet {
  id: number;
  createdAt: string;
  updatedAt: string;
  aaAddress: string;
  ownerAddress: string;
  factoryAddress: string;
  userId: number;
  chainId: number;
  isDeployed: boolean;
}

export interface AuthResponseUA {
  uaId?: string;
  refreshToken: string;
  refreshTokenExpire: number;
  accessToken: string;
  accessTokenExpire: number;
  userId: string;
}

export interface AuthDataSocial {
  user: User;
  w: W;
  refreshToken: string;
  refreshTokenExpire: number;
  accessToken: string;
  accessTokenExpire: number;
  userId: string;
  apiKey: string;
}

export interface AuthResponseSocial {
  message: string;
  data: AuthDataSocial;
}

export interface ErrorUA {
  message: string;
  success: string;
  error: string;
  statusCode: string;
}

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  apiKey: string;
  eoaWallet: string;
  encryptedPrivateKey: string;
  username: any;
  firstname: any;
  lastname: any;
  avatar: any;
  signature: any;
  primaryAAWallet: any;
  telegramId: any;
  telegramUsername: any;
  telegramFirstName: any;
  telegramLastName: any;
  telegramAvatarUrl: any;
  email: any;
  facebookId: any;
  facebookEmail: any;
  facebookFirstName: any;
  facebookLastName: any;
  facebookAvartaUrl: any;
  googleId: string;
  googleEmail: string;
  googleFirstName: string;
  googleLastName: string;
  googleAvatarUrl: string;
  twitterId: any;
  twitterEmail: any;
  twitterFirstName: any;
  twitterLastName: any;
  twitterAvatarUrl: any;
  aaWallets: AAWallet[];
}

export interface AAWallet {
  id: string;
  createdAt: string;
  updatedAt: string;
  aaAddress: string;
  factoryAddress: string;
  userId: string;
}

export interface W {
  id: string;
  createdAt: string;
  updatedAt: string;
  aaAddress: string;
  ownerAddress: string;
  factoryAddress: string;
  userId: string;
}

@Injectable()
export class ApiUAService {
  private async requestHeaderUA() {
    try {
      const layerGAPI = new LayerGAPI({
        apiKey: process.env.UA_PUBLIC_API_KEY,
        secretKey: process.env.UA_PRIVATE_API_KEY,
        origin: process.env.UA_ORIGIN_URL,
      });
      const currentTimestamp = new Date().getTime();
      const sig = await layerGAPI.createSignature(currentTimestamp);
      const header = {
        'x-signature': sig.signature,
        'x-timestamp': `${sig.timestamp}`,
        'x-api-key': process.env.UA_PUBLIC_API_KEY,
        origin: process.env.UA_ORIGIN_URL,
      };
      return header;
    } catch (error) {
      throw new HttpException(
        `Error Call request Header UA: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }
  async request(
    method: Method,
    url: string,
    data: any = {},
    headers: Record<string, string> = {},
  ): Promise<any> {
    try {
      const config: AxiosRequestConfig = {
        method,
        url,
        data: ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())
          ? data
          : undefined,
        params: method.toUpperCase() === 'GET' ? data : undefined,
        headers,
      };

      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error(
        `Error in API request to ${url}:`,
        error.response?.data || error.message,
      );
      throw error;
    }
  }

  async requestRedirect(
    method: Method,
    url: string,
    data: any = {},
    headers: Record<string, string> = {},
  ): Promise<any> {
    try {
      const config: AxiosRequestConfig = {
        method,
        url,
        data: ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())
          ? data
          : undefined,
        params: method.toUpperCase() === 'GET' ? data : undefined,
        headers,
      };

      const response = await axios(config);
      return response;
    } catch (error) {
      console.error(
        `Error in API request to ${url}:`,
        error.response?.data || error.message,
      );
      throw error;
    }
  }

  async requestUserProfileUA(uaId: string, bearerToken: string) {
    const header = await this.requestHeaderUA();
    header['Authorization'] = `Bearer ${bearerToken}`;
    const uAProfile: User = await this.request(
      'GET',
      `${process.env.UA_URL}/user/${uaId}`,
      {},
      header,
    );
    return uAProfile;
  }

  // async requestConnectTelegramUA(telegramId: string, otp: string) {
  //   try {
  //     const header = await this.requestHeaderUA();
  //     const response: ApiConnectTele = await this.request(
  //       'POST',
  //       `${process.env.UA_URL}/auth/telegram-login`,
  //       {
  //         telegramId,
  //         otp,
  //         chainId: 2484,
  //       },
  //       header,
  //     );
  //     return response.data;
  //   } catch (error) {
  //     throw new HttpException(
  //       `Error Call Connect Telegram: ${error.message}`,
  //       error?.response?.statusCode || HttpStatus.BAD_REQUEST,
  //     );
  //   }
  // }

  async requestOTPTelegramUA(telegramId: string) {
    try {
      const dataOTP = {
        telegramId,
      };
      const header = await this.requestHeaderUA();
      const response: ApiSendOTP = await this.request(
        'POST',
        `${process.env.UA_URL}/auth/telegram-otp-request`,
        dataOTP,
        header,
      );
      return response?.data;
    } catch (error) {
      throw new HttpException(
        `Error Call Request OTP Telegram: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async requestRefeshTokenUA(refreshToken: string) {
    try {
      const header = await this.requestHeaderUA();
      const response: ApiConnectWallet = await this.request(
        'POST',
        `${process.env.UA_URL}/auth/refresh`,
        {
          refreshToken: refreshToken,
        },
        header,
      );
      return response?.data;
    } catch (error) {
      throw new HttpException(
        `Error Call Request Refesh Token: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async requestConnectWalletUA(signature: string, signer: string) {
    try {
      const header = await this.requestHeaderUA();
      const response: ApiConnectWallet = await this.request(
        'POST',
        `${process.env.UA_URL}/auth/web3`,
        {
          signature,
          signer,
        },
        header,
      );
      return response?.data;
    } catch (error) {
      throw new HttpException(
        `Error Call Request Refesh Token: ${error.message}`,
        error?.response?.statusCode || HttpStatus.BAD_REQUEST,
      );
    }
  }

  async requestGenLinkGoogle() {
    const header = await this.requestHeaderUA();
    const response = await this.requestRedirect(
      'GET',
      `${process.env.UA_URL}/auth/google`,
      {},
      header,
    );
    return response?.headers['location'];
  }

  async requestGenLinkFB() {
    const header = await this.requestHeaderUA();
    const response = await this.requestRedirect(
      'GET',
      `${process.env.UA_URL}/auth/facebook`,
      {},
      header,
    );
    return response?.headers['location'];
  }

  async requestGenLinkTwitter() {
    const header = await this.requestHeaderUA();
    const response = await this.requestRedirect(
      'GET',
      `${process.env.UA_URL}/auth/twitter`,
      {},
      header,
    );
    return response?.headers['location'];
  }

  async requestConnectGoogleUA(
    code: string,
    state: string,
    iError: string,
  ): Promise<AuthResponseSocial | ErrorUA> {
    const header = await this.requestHeaderUA();
    const decodedString = decodeURIComponent(code);
    const data = iError
      ? { code: decodedString, error: iError, state }
      : { code: decodedString, state };

    const response = await this.request(
      'POST',
      `${process.env.UA_URL}/auth/google/callback`,
      data,
      header,
    );
    return response;
  }

  async requestConnectTwitterUA(
    code: string,
    state: string,
    iError: string,
  ): Promise<AuthResponseSocial | ErrorUA> {
    const header = await this.requestHeaderUA();
    const decodedString = decodeURIComponent(code);
    const stateDecode = decodeURIComponent(state);
    const data = iError
      ? { code: decodedString, error: iError, state: stateDecode }
      : { code: decodedString, state: stateDecode };
    const response = await this.request(
      'POST',
      `${process.env.UA_URL}/auth/twitter/callback`,
      data,
      header,
    );
    return response;
  }

  async requestConnectFBUA(
    code: string,
    state: string,
    iError: string,
  ): Promise<AuthResponseSocial | ErrorUA> {
    const header = await this.requestHeaderUA();
    const decodedString = decodeURIComponent(code);
    const stateDecode = decodeURIComponent(state);
    const data = iError
      ? { code: decodedString, error: iError, state: stateDecode }
      : { code: decodedString, state: stateDecode };
    const response = await this.request(
      'POST',
      `${process.env.UA_URL}/auth/facebook/callback`,
      data,
      header,
    );
    return response;
  }

  async requestConnectTeleUA(
    code: string,
    state: string,
    iError: string,
  ): Promise<AuthResponseSocial | ErrorUA> {
    const header = await this.requestHeaderUA();
    const response = await this.request(
      'POST',
      `${process.env.UA_URL}/auth/telegram/callback`,
      {
        code,
        state,
        error: iError,
      },
      header,
    );
    return response;
  }

  async requestSendTx(
    chainId: string,
    sponsor: boolean,
    transactionReq: any,
    appApiKey: string,
    bearerToken: string, // Add Bearer token as a parameter
  ) {
    const header = await this.requestHeaderUA();
    header['Authorization'] = `Bearer ${bearerToken}`; // Add Bearer token to headers

    const response = await this.request(
      'POST',
      `${process.env.UA_URL}/onchain/send`,
      {
        chainId,
        sponsor,
        transactionReq,
        appApiKey,
      },
      header,
    );
    return response;
  }

  async requestSignMessage(
    chainId: string,
    message: string,
    appApiKey: string,
    bearerToken: string, // Add Bearer token as a parameter
  ) {
    const header = await this.requestHeaderUA();
    header['Authorization'] = `Bearer ${bearerToken}`; // Add Bearer token to headers
    const response = await this.request(
      'POST',
      `${process.env.UA_URL}/onchain/sign-message`,
      {
        chainId,
        message,
        appApiKey,
      },
      header,
    );

    return response;
  }

  async requestVerifyMessage(
    chainId: string,
    message: string,
    signature: string,
    appApiKey: string,
    bearerToken: string,
  ) {
    const header = await this.requestHeaderUA();
    header['Authorization'] = `Bearer ${bearerToken}`;
    const response = await this.request(
      'POST',
      `${process.env.UA_URL}/onchain/verify-message`,
      {
        chainId,
        message,
        signature,
        appApiKey,
      },
      header,
    );

    return response;
  }

  requestGenLinkTelegram() {
    const url = `${process.env.BOT_TELEGRAM_LOGIN}`;
    return url;
  }

  addPrefix = (address: string): string => {
    if (!address) return address;
    return address.startsWith('0x') ? address : `0x${address}`;
  };
}
