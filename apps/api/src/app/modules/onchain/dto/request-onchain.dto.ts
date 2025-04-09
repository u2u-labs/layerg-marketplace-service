import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class TransactionRequestDto {
  @ApiProperty({ description: 'Blockchain chain ID', example: '1' })
  @IsString()
  chainId: string;

  @ApiProperty({
    description: 'Indicates if the transaction is sponsored',
    example: true,
  })
  @IsBoolean()
  sponsor: boolean;

  @ApiProperty({ description: 'Transaction request object', type: Object })
  @IsObject()
  transactionReq: any;

  @ApiProperty({
    description: 'API key for authentication',
    example: 'your-api-key',
  })
  @IsString()
  @IsOptional()
  appApiKey: string;
}

export class OrderTXRequestDto extends TransactionRequestDto {
  @ApiProperty({ description: 'Index of the order' })
  @IsNotEmpty()
  @IsNumber()
  index: number;

  @ApiProperty({ description: 'Signature of the order' })
  @IsString()
  @IsNotEmpty()
  sig: string;
}

export class RequestSignMessageDto {
  @ApiProperty({ description: 'Blockchain chain ID', example: '1' })
  @IsString()
  chainId: string;

  @ApiProperty({ example: 'Hi Universal!', description: 'The message content' })
  @IsString()
  message: string;

  @ApiProperty({
    example: 'B246603EF552D8372c4c91c5BAEf2Eed9c902fF4',
    description: 'The application API key',
  })
  @IsString()
  @IsOptional()
  appApiKey: string;
}

export class RequestVerifyMessageDto {
  @ApiProperty({ description: 'Blockchain chain ID', example: '1' })
  @IsString()
  chainId: string;

  @ApiProperty({ example: 'Hi Universal!', description: 'The message content' })
  @IsString()
  message: string;

  @ApiProperty({
    example:
      '0x5571a359fb0338ef9e6b0cb125c3f9e2ac84c9f68aadfc8414bd89724a125b92142d3717cbe0cf7bf3a30d20c64221cb18d3bdad3a2bd1836f0634abd4331bbd1c',
    description: 'The signature of the user',
  })
  @IsString()
  @IsNotEmpty()
  signature: string;

  @ApiProperty({
    example: 'B246603EF552D8372c4c91c5BAEf2Eed9c902fF4',
    description: 'The application API key',
  })
  @IsString()
  @IsOptional()
  appApiKey: string;
}

// requestVerifyMessage

export interface ResponseTokenUA {
  uaId: string;
  refreshToken: string;
  refreshTokenExpire: number;
  accessToken: string;
  accessTokenExpire: number;
  userId: string;
}
