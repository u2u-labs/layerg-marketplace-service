import { Activity } from '@/apps/api/src/app/constants/enums/Source.enum';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetActivityBase extends OffsetPaginationDto {
  @ApiPropertyOptional({
    description: 'Token ID associated with the activity',
    example: '12345',
  })
  @IsOptional()
  @IsString()
  tokenId?: string;

  @ApiPropertyOptional({
    description: 'Address of the collection',
    example: '0x123abc456def...',
  })
  @IsOptional()
  @IsString()
  collectionAddress?: string;

  @ApiPropertyOptional({
    description: 'Quote token address or symbol used in the activity',
    example: '0xabc123...',
  })
  @IsString()
  @IsOptional()
  quoteToken?: string;

  @ApiPropertyOptional({
    description: 'Type of activity',
    enum: Activity,
    example: `Transfer, FillOrder, CancelOrder,`,
  })
  @IsOptional()
  @IsEnum(Activity)
  type?: Activity;
}

export class GetHistoryOrderDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  collection?: string;

  @IsString()
  @IsOptional()
  quoteToken?: string;
}
