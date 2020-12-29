import API from 'app/api/client.contract';
import * as contracts from 'app/api/googleConsole/calls';
import getConfig from 'next/config';
import { ILatlng } from 'app/components/specific/addressField';
import { EateryTypes } from 'app/stores';

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
const apiKey: string = publicRuntimeConfig.GOOGLE_APIKEY || '';

const getLatLngFromAddress = async (p: IGetLatLngFromAddress): Promise<contracts.GetLatLngFromAddress.Response> => {
  const params = new contracts.GetLatLngFromAddress.Params();
  const queries = new contracts.GetLatLngFromAddress.Queries();
  const body = new contracts.GetLatLngFromAddress.Body();
  queries.address = `${p.address} Singapore`;
  queries.key = apiKey;

  const response = await API.call<contracts.GetLatLngFromAddress.Response>(contracts.GetLatLngFromAddress, params, queries, body);
  return response;
};

const getResultsFromLatlng = async (p: IGetResultsFromLatlng): Promise<void> => {
  const params = new contracts.GetResultsFromLatlng.Params();
  const queries = new contracts.GetResultsFromLatlng.Queries();
  const body = new contracts.GetResultsFromLatlng.Body();

  //Promise<Array<contracts.GetResultsFromLatlng.Response>>

  let nextPageToken: string = '';
  let pages: number = 1;
  let responses = [] as contracts.GetResultsFromLatlng.Response;

  // while (pages <= 3) {
  const isNextPageToken: boolean = nextPageToken !== '';
  console.log(isNextPageToken);
  queries.key = apiKey;
  queries.location = isNextPageToken ? undefined : `${p.latlng.lat},${p.latlng.lng}`;
  queries.radius = isNextPageToken ? undefined : p.radius;
  queries.maxPrice = isNextPageToken ? undefined : p.maxPrice;
  queries.minPrice = isNextPageToken ? undefined : p.minPrice;
  queries.opennow = isNextPageToken ? undefined : '';
  queries.type = isNextPageToken ? undefined : p.type;
  queries.pagetoken = isNextPageToken ? nextPageToken : undefined;

  const response = await API.call<contracts.GetResultsFromLatlng.Response>(contracts.GetResultsFromLatlng, params, queries, body);
  // TODO: to resolve
  // nextPageToken = response.data['next_page_token'] ? response.data['next_page_token'] : '';
  console.log(response);
  // }

  //   try {
  //     const response = await axios.get(nearbySearchURI);
  //     if (response.status === 200) {
  //       if (response.data.status === 'OK') {
  //         nextPageToken = response.data['next_page_token'] ? response.data['next_page_token'] : '';
  //         results = [...results, ...response.data.results];
  //         // small delay of 2s between each page of results
  //         await sleep(2000);
  //       } else {
  //         ctx.reply(`Error! ${response.data.status}`);
  //       }
  //     } else {
  //       ctx.reply('There is an Error!\nReponse Code: ' + response.status.toString());
  //     }
  //   } catch (err) {
  //     ctx.reply('There is an error! Please try again.\n' + err.toString());
  //   }

  //   if (nextPageToken === '') break;
  //   pages++;
  // }
};

const GoogleConsoleAPI = {
  getLatLngFromAddress,
  getResultsFromLatlng
};

export default GoogleConsoleAPI;
