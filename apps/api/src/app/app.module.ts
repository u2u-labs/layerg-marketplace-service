import {
  PrismaService,
  RedisSharedModule,
} from '@layerg-mkp-workspace/shared/services';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule as CronModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';

import { BigIntInterceptor } from '@/apps/api/src/app/commons/interceptors/bigint.interceptor';
import { ApiCallerModule } from '@/apps/api/src/app/modules/api-caller/api-caller.module';
import { AuthModule } from '@/apps/api/src/app/modules/auth/auth.module';
import { CMSModule } from '@/apps/api/src/app/modules/cms/cms.module';
import { CollectionModule } from '@/apps/api/src/app/modules/collection/collection.module';
import { CommonModule } from '@/apps/api/src/app/modules/common/common.module';
import { GraphQlcallerModule } from '@/apps/api/src/app/modules/graph-qlcaller/graph-qlcaller.module';
import { HealthcheckController } from '@/apps/api/src/app/modules/healthcheck/healthcheck.controller';
import { LaunchpadModule } from '@/apps/api/src/app/modules/launchpad/launchpad.module';
import { NftModule } from '@/apps/api/src/app/modules/nft/nft.module';
import { OrderModule } from '@/apps/api/src/app/modules/order/order.module';
import { PlatformOverviewModule } from '@/apps/api/src/app/modules/platform-overview/platform-overview.module';
import { PlatformTemplateModule } from '@/apps/api/src/app/modules/platform-template/platform-template.module';
import { UserModule } from '@/apps/api/src/app/modules/user/user.module';
import { ValidatorModule } from '@/apps/api/src/app/modules/validator/validator.module';
import { WebhookModule } from '@/apps/api/src/app/modules/webhook/webhook.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { GameLayergModule } from './modules/game-layerg/game-layerg.module';
import { OnchainModule } from './modules/onchain/onchain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 80,
    }),
    CronModule.forRoot(),
    ApiCallerModule,
    WebhookModule,
    CommonModule,
    AuthModule,
    UserModule,
    GraphQlcallerModule,
    CollectionModule,
    NftModule,
    ValidatorModule,
    LaunchpadModule,
    CMSModule,
    PlatformOverviewModule,
    PlatformTemplateModule,
    OrderModule,
    RedisSharedModule,
    OnchainModule, // Import Redis module
    GameLayergModule,
    CategoriesModule, // Import Redis module
  ],
  providers: [
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: BigIntInterceptor,
    },
  ],
  controllers: [HealthcheckController],
})
export class AppModule {}
