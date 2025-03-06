import { EventType } from '@/apps/api/src/app/generated/graphql';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsBoolean,
  IsEnum,
  IsDateString,
} from 'class-validator';

export class GetSummaryDto {
  @IsDateString()
  @IsOptional()
  start: string;

  @IsDateString()
  @IsOptional()
  end: EventType;
}
