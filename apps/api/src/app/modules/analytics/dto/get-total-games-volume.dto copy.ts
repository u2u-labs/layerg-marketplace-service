import { IsString } from 'class-validator';

export type TimeRange = '1D' | '1W' | '1M' | '3M' | '6M';

export class GetTotalGamesVolumeDTO {
  endTimestamp: string;
  timeRange: TimeRange = '1W';
  chainId: number;
  quoteToken: string;
  limit: number;
  page: number;
}
