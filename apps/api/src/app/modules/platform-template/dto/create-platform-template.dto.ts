import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreatePlatformTemplateDto {
  @ApiProperty({ description: 'Slugified name of the platform template' })
  @IsString()
  nameSlug: string;

  @ApiProperty({ description: 'Template name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Template avatar URL' })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiPropertyOptional({ description: 'Template banner URL' })
  @IsOptional()
  @IsString()
  banner?: string;

  @ApiPropertyOptional({ description: 'Description of the platform template' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Template sections in JSON format' })
  @IsString()
  sections: string;

  @ApiProperty({
    description: 'Indicates if the template is active',
    example: true,
  })
  @IsBoolean()
  isActive: boolean;
}
