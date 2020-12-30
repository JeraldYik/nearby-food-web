import { NextApiRequest, NextApiResponse } from 'next';
import API from 'lib/api/call';

/** DOCUMENTATION
 *  https://developers.google.com/places/web-service/search#PlaceSearchRequests
 */

export default async (req: NextApiRequest, res: NextApiResponse): Promise<Response | void> => {
  console.log(req.query);
  const baseURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  const response = await API.get(false, baseURL, null, req.query, null);
  res.send(response);
};
