import axios from 'axios';

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
        console.log(response.data.error_message);
        throw response.data.error_message;
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response);
        throw error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        throw error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log(error.message);
        throw error.message;
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
