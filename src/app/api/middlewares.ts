import getConfig from 'next/config';
import Cors from 'cors';

/** DOCUMENTATION
 * https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors
 */
const { publicRuntimeConfig } = getConfig();

const initialiseCors = async (): Promise<void> => {
  const baseURL: string = publicRuntimeConfig.BASE_URL || '';
  // Initialize the cors middleware
  const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({ origin: baseURL, methods: ['GET'] })
  );
  // const cors = Cors({ origin: baseURL, methods: ['GET'] });
  // Run cors
  await cors();
  return;
};

const runMiddlewares = async (): Promise<void> => {
  // add middlewares here
  await initialiseCors();
  return;
};

const initMiddleware = (middleware) => {
  console.log(middleware);
  return () =>
    new Promise((resolve, reject) => {
      middleware((result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

export default runMiddlewares;
