import {
  IsBoolean,
  IsOptional,
  IsString,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  id: string;

  @IsBoolean()
  isEnabled: boolean;

  @IsNumber()
  countFav: number;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  gameIcon?: string;

  @IsString()
  @IsOptional()
  banner: string;

  @IsString()
  @IsOptional()
  apiKeyID: string;

  @IsString()
  @IsOptional()
  telegram: string;

  @IsString()
  @IsOptional()
  facebook: string;

  @IsString()
  @IsOptional()
  instagram: string;

  @IsString()
  @IsOptional()
  discord: string;

  @IsString()
  @IsOptional()
  twitter: string;

  @IsString()
  @IsOptional()
  nameSlug: string;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  information: string;

  @IsString()
  @IsOptional()
  policy: string;

  @IsString()
  @IsOptional()
  version?: string;

  @IsArray()
  @IsString({ each: true })
  slideShow: string[];

  @IsNumber()
  totalReview: number;

  @IsNumber()
  totalRating: number;

  @IsString()
  slug: string;

  @IsBoolean()
  isRcm: boolean;

  @IsString()
  userId: string;
}
