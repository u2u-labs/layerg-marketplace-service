import { IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
import { Optional } from '@nestjs/common';

import { OffsetPaginationDto } from '../../../commons/definitions/OffsetPagination.input';

export class CreatePlatformOverviewDto {
  platform: string;
  nameSlug: string;
  name: string;
  avatar?: string;
  banner?: string;
  description?: string;
}

export class PlatformOverviewFilter extends OffsetPaginationDto {
  platform?: string;

  @Optional()
  @Transform(({ value }) => value === 'true')
  templateStatus?: boolean;
}
