import { InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import OtherCommon from '@/apps/api/src/app/commons/Other.common';
import { SignInDto } from './sign-in.dto';

@InputType()
export class CreateAccountDto extends SignInDto {
  @ApiProperty({
    description: 'User ID (optional for new accounts)',
    required: false,
    example: '1234',
  })
  @IsString()
  @IsOptional()
  id: string;

  @ApiProperty({
    description: 'User avatar URL',
    required: false,
    example: 'https://example.com/avatar.png',
  })
  @IsString()
  @IsOptional()
  avatar: string;

  @ApiProperty({
    description: 'User email address',
    required: false,
    example: 'user@example.com',
  })
  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User roles',
    example: ['admin', 'user'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  @OtherCommon.IsValidRoles({ message: 'Roles must be valid roles' })
  roles: string[];

  @ApiProperty({
    description: 'Twitter profile link',
    required: false,
    example: 'https://twitter.com/user',
  })
  @IsString()
  @IsOptional()
  twitterLink: string;

  @ApiProperty({
    description: 'Telegram profile link',
    required: false,
    example: 'https://t.me/user',
  })
  @IsString()
  @IsOptional()
  telegramLink: string;

  @ApiProperty({
    description: 'User phone number',
    required: false,
    example: '+1234567890',
  })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({ description: 'Username', example: 'user123' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'User password', example: 'securepassword123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Full name of the user',
    required: false,
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  fullName: string;
}
