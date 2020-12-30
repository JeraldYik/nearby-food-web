import API from 'lib/api/call';
import getConfig from 'next/config';
import { EateryTypes } from 'stores';
import axios from 'axios';

export interface ILatlng {
  lat: string;
  lng: string;
}

export interface IGetLatLngFromAddress {
  address: string;
}

export interface IGetResultsFromLatlng {
  latlng: ILatlng;
  type: EateryTypes;
  rating: number;
  minPrice: number;
  maxPrice: number;
  radius: number;
}

const { publicRuntimeConfig } = getConfig();
const GOOGLE_APIKEY: string = publicRuntimeConfig.GOOGLE_APIKEY || '';
const baseURL: string = publicRuntimeConfig.BASE_URL || '';

const getLatLngFromAddress = async (queries: IGetLatLngFromAddress): Promise<any> => {
  // const params = new contracts.GetLatLngFromAddress.Params();
  // const queries = new contracts.GetLatLngFromAddress.Queries();
  // const body = new contracts.GetLatLngFromAddress.Body();
  // queries.address = `${p.address} Singapore`;
  // queries.key = apiKey;
  // const response = await API.call<contracts.GetLatLngFromAddress.Response>(req);
  // return await axios.get('http://localhost:3000/api/googleConsole');
  // const geocodeURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${address} Singapore&key=${apiKey}`;
  queries['address'] += ' Singapore';
  queries['key'] = GOOGLE_APIKEY;
  const response = await API.get(true, '/api/googleConsole', null, queries, null);
  // TODO: to resolve
  const latlng: ILatlng = {
    lat: response.results[0].geometry.location.lat,
    lng: response.results[0].geometry.location.lng
  };
  return latlng;
};

const GoogleConsoleAPI = async (queries: IGetLatLngFromAddress) => {
  const latlng = await getLatLngFromAddress(queries);
  return latlng;
};

export default GoogleConsoleAPI;
