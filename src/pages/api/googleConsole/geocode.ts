// import cors from 'cors';

import { NextApiRequest, NextApiResponse } from 'next';
import API from 'lib/api/call';

/** DOCUMENTATION
 *  https://developers.google.com/maps/documentation/geocoding/overview
 */

export default async (req: NextApiRequest, res: NextApiResponse): Promise<Response | void> => {
  // console.log(req.query);
  const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';
  const response = await API.get(false, baseURL, null, req.query, null);
  res.send(response);
};
