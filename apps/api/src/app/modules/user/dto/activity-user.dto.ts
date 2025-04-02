import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CONTRACT_TYPE } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { LowercasePipe } from '@/apps/api/src/app/commons/pipe/LowerCase.pipe';
import { EventType } from '@/apps/api/src/app/generated/graphql';

export class GetActivityBase extends OffsetPaginationDto {
  @ApiProperty({
    description: 'User identifier (converted to lowercase)',
    example: 'user123',
  })
  @IsString()
  @Transform(({ value }) => new LowercasePipe().transform(value))
  user: string;

  @ApiPropertyOptional({ description: 'Type of activity' })
  @IsOptional()
  @IsString()
  type?: string;
}

export class GetFollowingDto extends OffsetPaginationDto {
  @ApiPropertyOptional({
    description: 'Search term for filtering results',
    example: 'username',
  })
  @IsString()
  @IsOptional()
  search: string;
}

export class GetListBid extends OffsetPaginationDto {
  @ApiProperty({
    description: 'Event type for filtering bids',
    enum: EventType,
  })
  @IsEnum(EventType)
  @IsNotEmpty()
  event: EventType;
}
