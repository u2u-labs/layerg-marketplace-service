import { Provider } from '@/apps/api/src/app/constants/enums/provider.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class loginDto {
  @ApiProperty({
    description: 'Timestamp or date string',
    example: '2025-03-22T12:00:00Z',
  })
  @IsString()
  date: string;

  @ApiProperty({
    description: 'Public key of the user',
    example: '0x1234567890abcdef',
  })
  @IsString()
  publicKey: string;

  @ApiProperty({
    description: 'Signature to verify authentication',
    example: '0xabcdef...',
  })
  @IsString()
  signature: string;

  @ApiProperty({
    description: 'Address of the signer',
    example: '0xabcdef1234567890',
  })
  @IsString()
  signer: string;
}

export class ConnectSocialAuthDto {
  @ApiProperty({
    example: '52504489',
    description: 'Code Google Auth after login with Google redirect URL',
  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    example:
      'eyJob3N0IjoiYnVuZGxlci1kZXYubGF5ZXJnLnh5eiIsIngtcmVhbC1pcCI6IjE3Mi43MS4yMTQuMTIxIiwieC1mb3J3YXJkZWQtZm9yIjoiMTQuMjQxLjI........more',
    description: 'The address of the user',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    example: '0x2743eEC46576f76f47334569074242F3D9a90B44',
    description: 'Error message if google auth failed',
  })
  @IsString()
  @IsOptional()
  error: string;

  @ApiProperty({
    example: Provider.GOOGLE,
    description: 'The social authentication provider',
  })
  @IsEnum(Provider)
  @IsNotEmpty()
  providerType: Provider;
}

export class GenerateProviderAuthDto {
  @ApiProperty({
    example: Provider.GOOGLE,
    description: 'The social authentication provider',
  })
  @IsEnum(Provider)
  @IsNotEmpty()
  providerType: Provider;
}

export class ConnectUAWalletDto {
  @ApiProperty({
    example:
      '0x5571a359fb0338ef9e6b0cb125c3f9e2ac84c9f68aadfc8414bd89724a125b92142d3717cbe0cf7bf3a30d20c64221cb18d3bdad3a2bd1836f0634abd4331bbd1c',
    description: 'The signature of the user',
  })
  @IsString({ message: 'signature must be a string ' })
  @MinLength(5)
  @MaxLength(500)
  @IsNotEmpty()
  signature: string;

  @ApiProperty({
    example: '0x5cc5a76b4d225122822482cd62d640ebbd0e8504',
    description: 'The un-capitalized address in Lowercase',
  })
  @IsString({ message: 'signer must be a string ' })
  @MinLength(5)
  @MaxLength(100)
  @IsNotEmpty()
  signer: string;

  @ApiProperty({
    example: '0x5cC5A76b4d225122822482CD62d640EBBd0E8504',
    description: 'The un-capitalized address in Uppercase',
  })
  @IsString({ message: 'publicKey must be a string ' })
  @MinLength(5)
  @IsNotEmpty()
  @MaxLength(100)
  publicKey: string;

  @ApiProperty({
    example: '2023-05-25T07:00:00.000Z',
    description: 'date of login',
  })
  @IsNotEmpty()
  @IsString()
  date: string;
}
