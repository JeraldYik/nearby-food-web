import axios from 'axios';

// const BASE_URL: string = process.env.BASE_URL || '';

const api = {
  get: async <Response>(url: string): Promise<Response | undefined> => {
    console.log(url);
    try {
      // const response = await axios.get(urlBuilder(path));
      const response = await axios.get(url);
      if (response.status === 200) {
        if (response.data.status === 'OK') {
          return response.data as Response;
        } else {
          throw response.data.status;
        }
      } else {
        throw response.status.toString();
      }
    } catch (err) {
      throw err.toString();
    }
  }
};

// const urlBuilder = (path: string): string => {
//   if (path.charAt(0) === '/') {
//     return BASE_URL + path;
//   }
//   return BASE_URL + '/' + path;
// };

export default api;
