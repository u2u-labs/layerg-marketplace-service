/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import { AppModule } from './app/app.module';

import { CollectionsUtilsProcessor } from '@/apps/worker/src/app/modules/job-queue/collection-utils.processor';

export let collectionsUtils: CollectionsUtilsProcessor = null;

function matchRegexArray(arr: string[], str: string): boolean {
  for (const pattern of arr) {
    const regex = new RegExp(pattern);
    if (regex.test(str)) {
      return true;
    }
  }
  return false;
}

const whitelist = ['http://localhost:3000'];
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || matchRegexArray(whitelist, origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  });
  if (process.env.SYNC_METRIC_POINT === 'true') {
    collectionsUtils = app.get(CollectionsUtilsProcessor);
    collectionsUtils.handleSyncMetricPoint();
  }

  app.use(compression());
  await app.listen(7777);
}
bootstrap();
