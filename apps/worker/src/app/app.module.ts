import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ScheduleModule as CronModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ApiCallerModule } from '@/apps/worker/src/app/modules/api-caller/api-caller.module';
import { WebhookModule } from '@/apps/worker/src/app/modules/webhook/webhook.module';
import { CommonModule } from '@/apps/worker/src/app/modules/common/common.module';
import { GraphQlcallerModule } from '@/apps/worker/src/app/modules/graph-qlcaller/graph-qlcaller.module';
import { JobQueueModule } from '@/apps/worker/src/app/modules/job-queue/job-queue.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { PrismaService } from '@/shared/src/lib/services/prisma/prisma.service';
@Module({
  imports: [
    // ConfigModule.forRoot({
    //   ignoreEnvFile: true,
    // }),
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 80,
    }),
    CronModule.forRoot(),
    ApiCallerModule,
    WebhookModule,
    CommonModule,
    GraphQlcallerModule,
    JobQueueModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          secure: false,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, 'templates/email'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
