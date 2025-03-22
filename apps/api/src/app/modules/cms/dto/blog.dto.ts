import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { IsHtmlWithoutScript } from '../validator/validator-cms';

export class getAllBlog extends OffsetPaginationDto {
  @ApiProperty({
    description: 'Search term for filtering blogs',
    required: false,
    example: 'NestJS Guide',
  })
  @IsOptional()
  @IsString()
  search: string;

  @ApiProperty({
    description: 'Start date for filtering',
    required: false,
    example: '2025-01-01T00:00:00Z',
  })
  @IsDateString()
  @IsOptional()
  start: Date;

  @ApiProperty({
    description: 'End date for filtering',
    required: false,
    example: '2025-12-31T23:59:59Z',
  })
  @IsDateString()
  @IsOptional()
  end: Date;

  @ApiProperty({
    description: 'Topic ID for filtering blogs',
    required: false,
    example: '1234',
  })
  @IsOptional()
  @IsString()
  topicId: string;
}

export class topicDto {
  @ApiProperty({ description: 'Topic ID', required: false, example: '5678' })
  @IsOptional()
  @IsNotEmpty()
  id: string;
}

export class createOrUpdateBlogDto {
  @ApiProperty({
    description: 'Blog ID (optional for update)',
    required: false,
    example: '1234',
  })
  @IsOptional()
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Title of the blog',
    example: 'Understanding NestJS',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Short description of the blog',
    required: false,
    example: 'A beginner-friendly guide to NestJS',
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Content of the blog in HTML format',
    required: false,
    example: '<p>Hello World</p>',
  })
  @IsOptional()
  @IsString()
  @IsHtmlWithoutScript()
  content: string;

  @ApiProperty({
    description: 'Indicates if the blog is active',
    required: false,
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @ApiProperty({ description: 'List of associated topics', type: [topicDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => topicDto)
  topics: topicDto[];
}

export class activeBlogDto {
  @ApiProperty({ description: 'Blog ID', example: '1234' })
  @IsOptional()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Indicates if the blog is active',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
