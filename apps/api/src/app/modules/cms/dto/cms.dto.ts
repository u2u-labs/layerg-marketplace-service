import { IsDateString, IsOptional } from 'class-validator';

import { EventType } from '@/apps/api/src/app/generated/graphql';

export class GetSummaryDto {
  @IsDateString()
  @IsOptional()
  start: string;

  @IsDateString()
  @IsOptional()
  end: EventType;
}
