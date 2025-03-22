import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class getAllTopicDto extends OffsetPaginationDto {
  @ApiProperty({
    description: 'Search keyword for topics',
    required: false,
    example: 'Blockchain',
  })
  @IsOptional()
  @IsString()
  search: string;
}

export class createOrUpdateTopicDto {
  @ApiProperty({
    description: 'Unique identifier for the topic',
    required: false,
    example: '12345',
  })
  @IsOptional()
  @IsString()
  id: string;

  @ApiProperty({ description: 'Name of the topic', example: 'NFT Marketplace' })
  @IsString()
  @IsNotEmpty()
  nameTopic: string;
}
