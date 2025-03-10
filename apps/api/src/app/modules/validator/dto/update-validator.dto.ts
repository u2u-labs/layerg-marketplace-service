import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { CreateValidatorDto } from './create-validator.dto';

@InputType()
export class UpdateValidatorDto extends PartialType(CreateValidatorDto) {
  @Field(() => Int)
  id: number;
}
