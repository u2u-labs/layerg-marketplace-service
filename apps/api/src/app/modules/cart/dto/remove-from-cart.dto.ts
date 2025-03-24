import { Provider } from '@/apps/api/src/app/constants/enums/provider.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RemoveFromCartDTO {
  @ApiProperty({
    description: 'ID of nft',
    example: '1',
  })
  @IsString()
  nftId: string;

  @ApiProperty({
    description: "ID of nft's collection",
    example: '1',
  })
  @IsString()
  collectionId: string;
}
