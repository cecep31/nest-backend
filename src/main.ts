import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { bufferLogs: true });
  app.enableCors({ origin: "*" })
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  console.log("app running on port " + process.env.PORT || 3000);
  await app.listen(process.env.PORT || 3000, '0.0.0.0');

}

bootstrap();
