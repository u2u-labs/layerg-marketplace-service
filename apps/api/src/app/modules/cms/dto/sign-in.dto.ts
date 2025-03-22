import { InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignInDto {
  @ApiProperty({ description: 'User’s login username', example: 'john_doe' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'User’s password', example: 'securePassword123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
