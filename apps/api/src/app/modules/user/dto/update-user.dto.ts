import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ description: 'User email address' })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiPropertyOptional({
    description: 'Username (max 25 characters)',
    maxLength: 25,
  })
  @IsString()
  @IsOptional()
  @MaxLength(25, {
    message: 'Username is too long, maximum length is 25 characters',
  })
  username: string;

  @ApiProperty({ description: 'Indicates if the user has accepted terms' })
  @IsBoolean()
  @IsOptional()
  acceptedTerms: boolean;

  @ApiPropertyOptional({
    description: 'User bio (max 1200 characters)',
    maxLength: 1200,
  })
  @IsOptional()
  @IsString()
  @MaxLength(1200, {
    message: 'Bio is too long, maximum length is 1200 characters',
  })
  bio: string;

  @ApiPropertyOptional({ description: 'Facebook profile link' })
  @IsOptional()
  @IsString()
  facebookLink: string;

  @ApiPropertyOptional({ description: 'Twitter profile link' })
  @IsOptional()
  @IsString()
  twitterLink: string;

  @ApiPropertyOptional({ description: 'Telegram profile link' })
  @IsOptional()
  @IsString()
  telegramLink: string;

  @ApiPropertyOptional({ description: 'Discord profile link' })
  @IsOptional()
  @IsString()
  discordLink: string;

  @ApiPropertyOptional({ description: 'User website URL' })
  @IsOptional()
  @IsString()
  webURL: string;

  @ApiPropertyOptional({ description: 'User avatar URL' })
  @IsOptional()
  @IsString()
  avatar: string;

  @ApiPropertyOptional({ description: 'User cover image URL' })
  @IsOptional()
  @IsString()
  coverImage: string;

  @ApiPropertyOptional({
    description: 'Short link (max 25 characters)',
    maxLength: 25,
  })
  @IsOptional()
  @IsString()
  @MaxLength(25, {
    message: 'Short link is too long, maximum length is 25 characters',
  })
  shortLink: string;
}
