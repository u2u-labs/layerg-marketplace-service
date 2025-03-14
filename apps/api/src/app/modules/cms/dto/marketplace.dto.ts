import { CONTRACT_TYPE } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class ActiveGeneral {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}

export class ActiveNFTDto extends ActiveGeneral {
  @IsString()
  @IsNotEmpty()
  collectionId: string;
}
export class ActiveCollectionDto extends ActiveGeneral {}
export class ActiveUserDto extends ActiveGeneral {}
export class VerifyCollectionDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsBoolean()
  @IsNotEmpty()
  isVerified: boolean;
}

export class OptionDto extends OffsetPaginationDto {
  @IsString()
  @IsOptional()
  search: string;

  @IsEnum(CONTRACT_TYPE)
  @IsOptional()
  type: CONTRACT_TYPE;
}
