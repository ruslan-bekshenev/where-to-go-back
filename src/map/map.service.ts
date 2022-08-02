import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { IRadiusParams, TLang } from './map.types';

@Injectable()
export class MapService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async geoname(params: { name: string }) {
    try {
      const { data } = await axios.get(
        `${process.env.API_GEO}/ru/places/geoname`,
        { params: { name: params.name, apikey: process.env.API_GEO_KEY } },
      );
      return data;
    } catch {
      throw new HttpException('ERR_BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }

  async radius(params: IRadiusParams) {
    try {
      const { data } = await axios.get(
        `${process.env.API_GEO}/ru/places/radius`,
        { params: { ...params, apikey: process.env.API_GEO_KEY } },
      );

      return data;
    } catch {
      throw new HttpException('ERR_BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }

  async placeInfo(id: string) {
    try {
      const { data } = await axios.get(
        `${process.env.API_GEO}/ru/places/xid/${id}`,
        {
          params: { apikey: process.env.API_GEO_KEY },
        },
      );

      return data;
    } catch {
      throw new HttpException('ERR_BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }
}
