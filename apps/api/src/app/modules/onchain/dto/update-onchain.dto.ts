import { PartialType } from '@nestjs/mapped-types';
import { CreateOnchainDto } from './create-onchain.dto';

export class UpdateOnchainDto extends PartialType(CreateOnchainDto) {}
