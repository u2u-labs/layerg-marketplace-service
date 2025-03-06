import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { GeneralInfor } from '@/apps/api/src/app/constants/enums/GeneralInfor.enum';
import { SellStatus } from '@/apps/api/src/app/generated/graphql';
import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
export class GetGeneralInforDto extends OffsetPaginationDto {
  @IsOptional()
  owner: string;

  @IsOptional()
  collectionAddress: string;

  @IsOptional()
  creatorAddress: string;

  @IsOptional()
  @IsEnum(SellStatus)
  sellStatus: SellStatus;

  @IsEnum(GeneralInfor)
  mode: GeneralInfor;
}

export class GetGeneralInforAllDto {
  @IsString()
  @IsNotEmpty()
  owner: string;
}
