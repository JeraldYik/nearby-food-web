import { EateryTypes } from 'stores';

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

export interface IResult {
  name: string;
  rating: number;
  priceLevel: number;
  vicinity: string;
  url: string;
}
