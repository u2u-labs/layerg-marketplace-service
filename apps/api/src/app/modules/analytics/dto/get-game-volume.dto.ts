import { IsString } from 'class-validator';

export type TimeRange = '1D' | '1W' | '1M' | '3M' | '6M';

export class GetGameVolumeDto {
  endTimestamp: string;
  timeRange: TimeRange = '1W';
}
