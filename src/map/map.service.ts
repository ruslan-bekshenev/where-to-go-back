import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { TLang } from './map.types';

@Injectable()
export class MapService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async place(lang: TLang, params: { name: string }) {
    try {
      console.log(
        `${process.env.API_GEO}/${lang}/places/geoname`,
        params,
        process.env.API_GEO_KEY,
      );
      const placesGeoInfo = await axios.get(
        `${process.env.API_GEO}/${lang}/places/geoname`,
        { params: { ...params, apikey: process.env.API_GEO_KEY } },
      );
      return placesGeoInfo;
    } catch (e) {
      console.log(e);
      throw new HttpException('ERR_BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }
}
