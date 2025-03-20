import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetAllCategoryDto extends OffsetPaginationDto {
  @ApiPropertyOptional({
    description: 'Search for games',
    type: String,
    example: 'Super Mario',
  })
  @IsString()
  @IsOptional()
  search: string;
}
