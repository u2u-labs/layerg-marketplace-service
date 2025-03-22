import { InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

@InputType()
export class VerifyOrderDto {
  @ApiProperty({ description: 'Signature of the order' })
  @IsString()
  @IsNotEmpty()
  sig: string;

  @ApiProperty({ description: 'Index of the order' })
  @IsNumber()
  @IsNotEmpty()
  index: number;
}

@InputType()
export class VerifyOrdersDto {
  @ApiProperty({
    description: 'List of orders to verify',
    type: [VerifyOrderDto],
  })
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => VerifyOrderDto)
  orders: VerifyOrderDto[];
}

export class ActionOrderDto {
  @ApiProperty({ description: 'Transaction hash of the order action' })
  @IsString()
  @IsNotEmpty()
  tx: string;
}
