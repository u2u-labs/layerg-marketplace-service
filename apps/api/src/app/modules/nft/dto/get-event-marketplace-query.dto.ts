import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { LowercasePipe } from '@/apps/api/src/app/commons/pipe/LowerCase.pipe';
import { SellStatus } from '@/apps/api/src/app/generated/graphql';

export class GetEventMarketplaceQuery {
  @IsOptional()
  @IsString()
  nftId?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => new LowercasePipe().transform(value))
  from?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => new LowercasePipe().transform(value))
  to?: string;

  @IsString()
  @IsOptional()
  quoteToken?: string;

  @IsOptional()
  @IsEnum(SellStatus)
  event?: SellStatus;
}
