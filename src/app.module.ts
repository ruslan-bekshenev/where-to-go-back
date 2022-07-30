import { Module } from '@nestjs/common';
import { MapModule } from './map/map.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MapModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
