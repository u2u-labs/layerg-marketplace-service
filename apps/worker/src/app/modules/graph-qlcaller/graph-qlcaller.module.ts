import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GraphQlcallerService } from './graph-qlcaller.service';
import { GraphQlcallerController } from './graph-qlcaller.controller';

@Module({
  controllers: [GraphQlcallerController],
  providers: [GraphQlcallerService],
})
export class GraphQlcallerModule {}
