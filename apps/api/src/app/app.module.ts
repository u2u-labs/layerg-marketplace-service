import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule as CronModule } from '@nestjs/schedule';
import { ApiCallerModule } from '@/apps/api/src/app/modules/api-caller/api-caller.module';
import { CommonModule } from '@/apps/api/src/app/modules/common/common.module';
import { WebhookModule } from '@/apps/api/src/app/modules/webhook/webhook.module';
import { UserModule } from '@/apps/api/src/app/modules/user/user.module';
import { AuthModule } from '@/apps/api/src/app/modules/auth/auth.module';
import { GraphQlcallerModule } from '@/apps/api/src/app/modules/graph-qlcaller/graph-qlcaller.module';
import { CollectionModule } from '@/apps/api/src/app/modules/collection/collection.module';
import { NftModule } from '@/apps/api/src/app/modules/nft/nft.module';
import { ValidatorModule } from '@/apps/api/src/app/modules/validator/validator.module';
import { LaunchpadModule } from '@/apps/api/src/app/modules/launchpad/launchpad.module';
import { CMSModule } from '@/apps/api/src/app/modules/cms/cms.module';
import { PlatformOverviewModule } from '@/apps/api/src/app/modules/platform-overview/platform-overview.module';
import { PlatformTemplateModule } from '@/apps/api/src/app/modules/platform-template/platform-template.module';
import { OrderModule } from '@/apps/api/src/app/modules/order/order.module';
import { PrismaService, RedisSharedModule } from '@layerg-mkp-workspace/shared/services';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BigIntInterceptor } from '@/apps/api/src/app/commons/interceptors/bigint.interceptor';
import { HealthcheckController } from '@/apps/api/src/app/modules/healthcheck/healthcheck.controller';

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
    RedisSharedModule, // Import Redis module

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
