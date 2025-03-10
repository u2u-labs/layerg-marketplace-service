import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail } from 'class-validator';

import { CreateUserDto } from './create-user.dto';

export class SendVerifyEmailDto {
  @IsString()
  @IsEmail()
  email: string;
}

export class VerifyEmailDto {
  @IsString()
  token: string;
}
