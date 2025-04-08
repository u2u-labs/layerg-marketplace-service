import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { LowercasePipe } from '@/apps/api/src/app/commons/pipe/LowerCase.pipe';
import { Activity } from '@/apps/api/src/app/constants/enums/Source.enum';
import { EventType } from '@/apps/api/src/app/generated/graphql';

export class GetActivityUserDto extends OffsetPaginationDto {
  @ApiProperty({
    description: 'User identifier (converted to lowercase)',
    example: '8836c0d5-2220-4fac-891a-8850d6840915',
  })
  @IsString()
  @Transform(({ value }) => new LowercasePipe().transform(value))
  user: string;

  @ApiPropertyOptional({
    description: 'Type of activity',
    enum: Activity,
    example: `Transfer, FillOrder, CancelOrder,`,
  })
  @IsOptional()
  @IsEnum(Activity)
  type?: Activity;
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
