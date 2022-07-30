import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { TLang } from './map.types';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private mapService: MapService) {}

  @Get('/place/:lang')
  place(@Param('lang') lang: TLang, @Query() params: { name: string }) {
    return this.mapService.place(lang, params);
  }
}
