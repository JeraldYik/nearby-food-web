import { HTTP_VERBS } from './http-verbs';

export default interface IContract {
  httpVerb: HTTP_VERBS;
  url: string;
  Queries: any;
  Params: any;
  Body: any;
  Response: any;
}
