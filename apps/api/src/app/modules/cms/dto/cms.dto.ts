import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional } from 'class-validator';

export class GetSummaryDto {
  @ApiProperty({
    description: 'Start date for summary data',
    required: false,
    example: '2025-01-01T00:00:00Z',
  })
  @IsDateString()
  @IsOptional()
  start: string;

  @ApiProperty({
    description: 'End date for summary data',
    required: false,
    example: '2025-12-31T23:59:59Z',
  })
  @IsDateString()
  @IsOptional()
  end: string;
}
