import axios from 'axios';
import { ErrorType } from 'hooks/useErrorHandler';

const baseURL = process.env.BASE_URL || '';

const API = {
  get: async <Response>(internal: boolean, path: string, params?: any, queries?: any, body?: any): Promise<Response> => {
    try {
      const url = generateURL(internal, path, params, queries);
      // console.log('url in call ', url);
      const response = await axios.get(url);
      if (response.data.status === 'OK') {
        return response.data as Response;
      } else {
        throw response.data;
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('error.response: ', error.response);
        const err: ErrorType = {
          statusCode: error.response.status,
          errorMessage: error.response.data
        };
        throw err;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('error.request: ', error.request);
        const err: ErrorType = {
          statusCode: error.request.status,
          errorMessage: error.request.data
        };
        throw err;
      } else {
        // Something happened in setting up the request that triggered an Error
        error.message && console.log('error.message: ', error.message);
        error.error_message && console.log('error.error_message: ', error.error_message);
        // TODO: map error codes to statuses
        const err: ErrorType = {
          statusCode: 0,
          errorMessage: error.message || error.error_message
        };
        err.statusCode = error.status === 'REQUEST_DENIED' ? 403 : 500;
        throw err;
      }
    }
  }
};

export const generateURL = (internal: boolean, path: string, params?: any, queries?: any): string => {
  let finalURL: string = '';
  if (internal) {
    finalURL = baseURL + (path.charAt(0) === '/' ? path : '/' + path);
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
