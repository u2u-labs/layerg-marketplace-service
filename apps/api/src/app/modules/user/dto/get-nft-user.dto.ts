import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';

import { CreateUserDto } from './create-user.dto';
import { NFTTab } from '../../../constants/enums/NFTTab.enum';

export class FilterNFTUserDetail {
  @IsOptional()
  @IsEnum(NFTTab)
  tab: NFTTab;
}
