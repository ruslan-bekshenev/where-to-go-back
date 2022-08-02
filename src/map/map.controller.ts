import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { IRadiusParams, TLang } from './map.types';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private mapService: MapService) {}

  @Get('/geoname')
  place(@Query() params: { name: string }) {
    return this.mapService.geoname(params);
  }

  @Get('/radius')
  radius(@Query() params: IRadiusParams) {
    return this.mapService.radius(params);
  }

  @Get('/place-info/:id')
  placeInfo(@Param('id') id: string) {
    return this.mapService.placeInfo(id);
  }
}
