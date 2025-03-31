import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';

export type TimeRange = '1D' | '1W' | '1M' | '3M' | '6M' | 'ALL_TIME';

export class GetGameVolumeDto {
  @ApiProperty({
    description: 'End timestamp in string format',
    example: '1700000000',
  })
  @IsString()
  endTimestamp: string;

  @ApiProperty({
    enum: ['1D', '1W', '1M', '3M', '6M', 'ALL_TIME'],
    default: '1W',
    description: 'Time range for data',
  })
  @IsEnum(['1D', '1W', '1M', '3M', '6M', 'ALL_TIME'])
  timeRange: TimeRange = '1W';
}
