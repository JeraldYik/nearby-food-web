import IContract from 'app/api/contract';
import { HTTP_VERBS } from 'app/api/http-verbs';
import { default as baseAPI } from 'app/api/client';
import { plainToClass } from 'class-transformer';
import runMiddlewares from 'app/api/middlewares';

const API = {
  call: async <Response>(contract: IContract, params: any, queries: any, body: any): Promise<Response> => {
    runMiddlewares();
    const url = generateURL(contract.url, params, queries);
    let response;
    switch (contract.httpVerb) {
      case HTTP_VERBS.GET: {
        response = await baseAPI.get(url);
        break;
      }
      // case HTTP_VERBS.DELETE: {
      //   response = await baseAPI.delete(url);
      //   break;
      // }
      // case HTTP_VERBS.PATCH: {
      //   response = await baseAPI.patch(url, B);
      //   break;
      // }
      // case HTTP_VERBS.POST: {
      //   response = await baseAPI.post(url, B);
      //   break;
      // }
      // case HTTP_VERBS.PUT: {
      //   response = await baseAPI.put(url, B);
      //   break;
      // }
      default:
        throw new Error('Not a GET request!');
    }
    return (plainToClass(contract.Response, response) as unknown) as Response;
  }
};

const generateURL = (url: string, params: any, queries: any): string => {
  let finalURL = url;

  const paramKeys = Object.getOwnPropertyNames(params);
  for (const p of paramKeys) {
    finalURL = finalURL.replace(`:${p}`, params[p]);
  }

  const queryKeys = Object.getOwnPropertyNames(queries);
  const cleanedQueries = queryKeys.filter((k: string) => {
    return queries[k] !== undefined && queries[k] !== null;
  });

  if (0 === cleanedQueries.length) {
    return finalURL;
  }

  finalURL += '?';
  for (const q of cleanedQueries) {
    finalURL += `${q}=${queries[q]}&`;
  }
  return finalURL.slice(0, -1);
};

export default API;
