import { HTTP_VERBS } from 'app/api/http-verbs';

/** DOCUMENTATION
 *  https://developers.google.com/maps/documentation/geocoding/overview
 */

export const httpVerb = HTTP_VERBS.GET;
export const url = 'https://maps.googleapis.com/maps/api/geocode/json';
export class Params {}
export class Queries {
  public address?: string;
  public key?: string;
}
export class Body {}
export class Response {}
