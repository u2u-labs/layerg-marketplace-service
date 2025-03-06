import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class getAllTopicDto extends OffsetPaginationDto {
  @IsOptional()
  search: string;
}

export class createOrUpdateTopicDto {
  @IsOptional()
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  nameTopic: string;
}
