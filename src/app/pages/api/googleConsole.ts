import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

require('dotenv').config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const apiKey: string = process.env.GOOGLE_APIKEY || '';
    const address = '577047';

    /** DOCUMENTATION
     *  https://developers.google.com/maps/documentation/geocoding/overview
     */
    const geocodeURI = `https://maps.googleapis.com/maps/api/geocode/json?address=${address} Singapore&key=${apiKey}`;

    try {
      const response = await axios.get(geocodeURI);
      if (response.status === 200) {
        if (response.data.status === 'OK') {
          console.log(response.data);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(response.data));
        } else {
          console.log(`Error! ${response.data.status}`);
        }
      } else {
        console.log('There is an Error!\nReponse Code: ' + response.status.toString());
      }
    } catch (err) {
      console.log('There is an error! Please try again.\n' + err.toString());
    }
  } else {
    throw new Error('Methods other than GET not allowed!');
  }
};
