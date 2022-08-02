export type TLang = 'en' | 'ru';

export interface IRadiusParams {
  radius?: number;
  limit?: number;
  offset?: number;
  lon: number;
  lat: number;
  rate?: number;
  format: 'json' | 'count';
}
