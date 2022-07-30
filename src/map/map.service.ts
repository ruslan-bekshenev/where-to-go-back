import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

interface IPlaceParams {
  lang: 'en' | 'ru';
  name: string;
}

@Injectable()
export class MapService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async place(params: IPlaceParams) {
    const { lang, ...rest } = params;
    try {
      const placesGeoInfo = await axios.get(
        `${process.env.API_GEO}/${lang}/places/geoname`,
        { params: rest },
      );
      return placesGeoInfo;
    } catch (e) {
      throw new HttpException('ERR_BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }
}
