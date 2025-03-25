import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export type TimeRange = '1D' | '1W' | '1M' | '3M' | '6M';

export class GetTotalGamesVolumeDTO {
  @ApiProperty({
    description: 'End timestamp in string format',
    example: '1700000000',
  })
  @IsString()
  endTimestamp: string;

  @ApiProperty({
    enum: ['1D', '1W', '1M', '3M', '6M'],
    default: '1W',
    description: 'Time range for data',
  })
  @IsEnum(['1D', '1W', '1M', '3M', '6M'])
  timeRange: TimeRange = '1W';

  @ApiProperty({ description: 'Blockchain chain ID', example: 1 })
  @Type(() => Number)
  @IsNumber()
  chainId: number;

  @ApiProperty({
    description: 'Quote token address or symbol',
    example: '0x1234567890abcdef',
  })
  @IsString()
  quoteToken: string;

  @ApiProperty({ description: 'Limit of records per page', example: 10 })
  @Type(() => Number)
  @IsNumber()
  limit: number;

  @ApiProperty({ description: 'Page number for pagination', example: 1 })
  @Type(() => Number)
  @IsNumber()
  page: number;
}
