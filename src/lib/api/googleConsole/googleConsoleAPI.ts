import API from 'lib/api/call';
import getConfig from 'next/config';
import { geocode_path, places_nearbysearch_path } from 'lib/api/googleConsole/paths';
import { ILatlng, IGetLatLngFromAddress, IGetResultsFromLatlng, IResult } from 'lib/api/googleConsole/interfaces';
import { sleep } from 'lib/helper';

// export interface IGoogleConsoleAPI extends IGetLatLngFromAddress, IGetResultsFromLatlng {}

const { publicRuntimeConfig } = getConfig();
const GOOGLE_APIKEY: string = publicRuntimeConfig.GOOGLE_APIKEY || '';

const getLatLngFromAddress = async (queries: IGetLatLngFromAddress): Promise<ILatlng> => {
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
  const response = await API.get(true, geocode_path, null, queries, null);
  // TODO: to resolve
  const latlng: ILatlng = {
    lat: response.results[0].geometry.location.lat,
    lng: response.results[0].geometry.location.lng
  };
  return latlng;
};

const getResultsFromLatlng = async (queries: IGetResultsFromLatlng): Promise<Array<IResult>> => {
  let pages: number = 1;
  let nextPageToken: string = '';
  let results = [] as any;

  // max results returned = 20 * 3
  while (pages <= 3) {
    const isNextPageToken: boolean = nextPageToken !== '';
    const filteredQueries = isNextPageToken ? { key: GOOGLE_APIKEY, pagetoken: nextPageToken } : { ...queries, key: GOOGLE_APIKEY, rating: null };
    const response = await API.get(false, places_nearbysearch_path, null, filteredQueries, null);
    // console.log(filteredQueries, response);
    // TODO: to resolve
    nextPageToken = response['next_page_token'] ? response['next_page_token'] : '';
    results = [...results, ...response.results];
    // small delay of 2s between each page of results
    await sleep(2000);

    if (!isNextPageToken) break;
    pages++;
  }

  let parsedResult = [] as Array<IResult>;
  if (results.length > 0) {
    // remove places with low ratings
    results.forEach((r) => {
      if (r.rating >= queries.rating) {
        // to be displayed on front-end
        const _url = `https://www.google.com/maps/search/?api=1&query=${queries.location}&query_place_id=${r['place_id']}`;
        const result: IResult = {
          name: r.name,
          rating: r.rating,
          priceLevel: r.price_level,
          vicinity: r.vicinity,
          url: _url
        };
        parsedResult.push(result);
      }
    });

    // sort by rating
    parsedResult.sort((a, b) => b.rating - a.rating);
  }
  return parsedResult;
};

const GoogleConsoleAPI = {
  getLatLngFromAddress,
  getResultsFromLatlng
};

export default GoogleConsoleAPI;