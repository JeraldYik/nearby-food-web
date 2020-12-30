// import { NextApiRequest, NextApiResponse } from 'next';
// import runMiddlewares from 'lib/api/middlewares';

import cors from 'cors';

//   // Initialize the cors middleware
//   const cors = initMiddleware(
//     // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//     Cors()
//   );

//   // // Run cors
//   await cors(req, res);

//   // // Rest of the API logic
//   res.json({ message: 'Hello Everyone!' });

//   // await runMiddlewares(req, res);
//   // res.statusCode = 200;
//   // res.json({ hello: 'world' });
// };

// function initMiddleware(middleware) {
//   return (req, res) =>
//     new Promise((resolve, reject) => {
//       middleware(req, res, (result) => {
//         if (result instanceof Error) {
//           return reject(result);
//         }
//         return resolve(result);
//       });
//     });
// }

import { NextApiRequest, NextApiResponse } from 'next';
// import nextConnect from 'next-connect';
import API from 'lib/api/call';

const testMiddleware = (req, res, next) => {
  cors(req, res, (result) => {
    console.log(result);
  });
  console.log('middleware');
  next();
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<Response | void> => {
  console.log(req.query);
  const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';
  const response = await API.get(false, baseURL, null, req.query, null);
  res.send(response);
};

// const handler = nextConnect()
//   // .use(testMiddleware)
//   .get(
//     async (req: NextApiRequest, res: NextApiResponse): Promise<Response | void> => {
//       console.log(req.query);
//       const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';
//       const response = await API.get(false, baseURL, null, req.query, null);
//       res.send(response);
//     }
//   );

// export default handler;
