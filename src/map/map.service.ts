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
        `${process.env.API_GEO}/${lang}/places/geoname?name=${params.name}&apikey=${process.env.API_GEO_KEY}`,
      );
      console.log(
        await axios.get(`${process.env.API_GEO}/${lang}/places/geoname`, {
          params: { name: params.name, apikey: process.env.API_GEO_KEY },
        }),
      );
      const { data } = await axios.get(
        `${process.env.API_GEO}/${lang}/places/geoname`,
        { params: { name: params.name, apikey: process.env.API_GEO_KEY } },
      );
      return data;
    } catch (e) {
      throw new HttpException('ERR_BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }
}
