import {
  IsString,
  IsOptional,
  IsArray,
  IsNotEmpty,
  IsDateString,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IsHtmlWithoutScript } from '../validator/validator-cms';
import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class getAllBlog extends OffsetPaginationDto {
  @IsOptional()
  @IsString()
  search: string;

  @IsDateString()
  @IsOptional()
  start: Date;

  @IsDateString()
  @IsOptional()
  end: Date;

  @IsOptional()
  @IsString()
  topicId: string;
}

export class createOrUpdateBlogDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  @IsHtmlWithoutScript()
  content: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => topicDto)
  topics: topicDto[];
}

export class topicDto {
  @IsOptional()
  @IsNotEmpty()
  id: string;
}

export class activeBlogDto {
  @IsOptional()
  @IsNotEmpty()
  id: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
