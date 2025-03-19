/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { AppModule } from './app/app.module';

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

  app.use(compression());
  await app.listen(7777);
}
bootstrap();
