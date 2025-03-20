import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { SearchProjectMode } from '@/apps/api/src/app/constants/enums/game.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

export class GetListameDto extends OffsetPaginationDto {
  @ApiPropertyOptional({
    description: 'Search for games',
    type: String,
    example: 'Super Mario',
  })
  @IsString()
  @IsOptional()
  search: string;

  @ApiPropertyOptional({
    description: 'Filter by categories',
    type: [String],
    example: ['Action', 'Adventure'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[];

  @ApiPropertyOptional({
    description: 'Search mode for projects',
    enum: SearchProjectMode,
    example: SearchProjectMode.ALL,
  })
  @IsOptional()
  @IsEnum(SearchProjectMode)
  mode: SearchProjectMode = SearchProjectMode.ALL;
}
