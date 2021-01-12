// import cors from 'cors';

import { NextApiRequest, NextApiResponse } from 'next';
import API from 'lib/api/call';
import NextCors from 'nextjs-cors';

/** DOCUMENTATION
 *  https://developers.google.com/maps/documentation/geocoding/overview
 */

export default async (req: NextApiRequest, res: NextApiResponse): Promise<Response | void> => {
  // console.log(req.query);
  /** DOCUMENTATION
   *  https://github.com/yonycalsin/nextjs-cors
   */
  await NextCors(req, res, {
    // Options
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';
  const response = await API.get(false, baseURL, null, req.query, null);
  res.send(response);
};
