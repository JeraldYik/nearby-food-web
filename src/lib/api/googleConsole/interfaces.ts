import { EateryTypes } from 'stores/ParamsStore';

export interface ILatlng {
  lat: string;
  lng: string;
}

export interface IGetLatLngFromAddress {
  address: string;
}

export interface IGetResultsFromLatlng {
  location: string;
  type: EateryTypes;
  rating: number;
  minprice: number;
  maxprice: number;
  radius: number;
  opennow: '';
}
