import {
  IsDate,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { ProjectStat } from '@/apps/api/src/app/constants/enums/ProjectStat.enum';

export class FindAllProjectDto {
  @IsDateString()
  @IsOptional()
  start: Date;

  @IsDateString()
  @IsOptional()
  end: Date;

  @IsOptional()
  @IsEnum(ProjectStat)
  mode: ProjectStat;
}
