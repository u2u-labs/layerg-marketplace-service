/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, RequestMethod, ValidationPipe } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import session from 'express-session';
import passport from 'passport';
import { AppModule } from './app/app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: process.env.REDIS_HOST as string,
      port: process.env.REDIS_PORT as unknown as number,
      username: process.env.REDIS_USERNAME as string,
      password: process.env.REDIS_PASSWORD as string,
    },
  });

  const globalPrefix = 'api';
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'default_secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, // 1 hour
      },
    }),
  );

  const excludedRoutes: RouteInfo[] = [{ path: '', method: RequestMethod.GET }];
  app.setGlobalPrefix('api', { exclude: excludedRoutes });
  app.use(passport.initialize());
  app.use(passport.session());
  const options = new DocumentBuilder()
    .setTitle('LayerG')
    .setDescription('API documentation for LayerG')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  const port = process.env.PORT || 8888;
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
  await app.startAllMicroservices();
  await app.listen(port);
}

bootstrap();
