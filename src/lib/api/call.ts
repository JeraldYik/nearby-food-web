import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const baseURL: string = publicRuntimeConfig.BASE_URL || '';
const corsBypassURL: string = publicRuntimeConfig.CORS_BYPASS_URL || '';

const API = {
  get: async <Response>(internal: boolean, path: string, params?: any, queries?: any, body?: any): Promise<Response> => {
    try {
      const url = generateURL(internal, path, params, queries);
      // console.log('url in call ', url);
      // TODO: use middleware approach to enable CORS
      const response = await axios.get(url);
      // console.log(response);
      return response.data as Response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        throw error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        throw error.message;
      }
    }
  }
};

export const generateURL = (internal: boolean, path: string, params?: any, queries?: any): string => {
  let finalURL: string = '';
  if (internal) {
    finalURL = corsBypassURL + baseURL + (path.charAt(0) === '/' ? path : '/' + path);
  } else {
    finalURL = path;
  }
  if (params) {
    const paramKeys = Object.getOwnPropertyNames(params);
    for (const p of paramKeys) {
      finalURL = finalURL.replace(`:${p}`, params[p]);
    }
  }
  if (queries) {
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
  }

  return finalURL.slice(0, -1);
};

export default API;
