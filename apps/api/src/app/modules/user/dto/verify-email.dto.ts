import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SendVerifyEmailDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsString()
  email: string;
}

export class VerifyEmailDto {
  @ApiProperty({
    description: 'Verification token received via email',
    example: 'abcdef123456',
  })
  @IsString()
  token: string;
}
