import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { CreateNftDto } from './create-nft.dto';

@InputType()
export class UpdateNftDto extends PartialType(CreateNftDto) {
  // @Field(() => Int)
  // id: number;
}
