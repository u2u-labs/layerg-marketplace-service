import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import OtherCommon from '@/apps/api/src/app/commons/Other.common';

export class UpdateAccountDto {
  @ApiProperty({
    description: 'Avatar URL of the user',
    required: false,
    example: 'https://example.com/avatar.png',
  })
  @IsString()
  @IsOptional()
  avatar: string;

  @ApiProperty({
    description: 'Email address of the user',
    required: false,
    example: 'user@example.com',
  })
  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Roles assigned to the user',
    required: false,
    example: ['admin', 'user'],
  })
  @IsArray()
  @IsOptional()
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
    description: 'Phone number of the user',
    required: false,
    example: '+1234567890',
  })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({
    description: 'Full name of the user',
    required: false,
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  fullName: string;
}

export class UpdatePasswordDto {
  @ApiProperty({ description: 'Current password', example: 'OldPass123!' })
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty({ description: 'New password', example: 'NewPass456!' })
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}

export class ResetPasswordDto {
  @ApiProperty({ description: 'User ID', example: '12345' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ description: 'New password', example: 'ResetPass789!' })
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}

export class UpdateRolesDto {
  @ApiProperty({ description: 'User ID', example: '12345' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Roles to assign',
    example: ['admin', 'moderator'],
  })
  @IsArray()
  @IsString({ each: true }) // Ensures each element in the array is a string
  @IsNotEmpty()
  @OtherCommon.IsValidRoles({ message: 'Roles must be valid roles' })
  roles: string[];
}
