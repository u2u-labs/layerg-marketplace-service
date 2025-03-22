import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class GetAllAccountDto extends OffsetPaginationDto {
  @ApiProperty({
    description: 'Filter by username',
    required: false,
    example: 'john_doe',
    type: String,
  })
  @IsOptional()
  @IsString()
  username: string;
}
