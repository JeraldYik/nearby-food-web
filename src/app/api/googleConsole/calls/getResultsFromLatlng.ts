import { HTTP_VERBS } from 'app/api/http-verbs';
import { EateryTypes } from 'app/stores';

/** DOCUMENTATION
 *  https://developers.google.com/places/web-service/search#PlaceSearchRequests
 */

export const httpVerb = HTTP_VERBS.GET;
export const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
export class Params {}
export class Queries {
  public nextPageToken?: string;
  public location?: string;
  public type?: EateryTypes;
  public minPrice?: number;
  public maxPrice?: number;
  public radius?: number;
  public opennow?: string;
  public pagetoken?: string;
  public key?: string;
}
export class Body {}
export class Response {}
