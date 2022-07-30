import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

const corsOptions: CorsOptions = {
  allowedHeaders: [
    'origin',
    'x-requested-with',
    'content-type',
    'accept',
    'authorization',
  ],
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:3000'],
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
