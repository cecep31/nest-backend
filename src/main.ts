import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { winstonConfig } from './config/winston';
import { WinstonModule } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  console.log('App running on port ' + port);
  await app.listen(port || 3001, '0.0.0.0');
}

bootstrap();
