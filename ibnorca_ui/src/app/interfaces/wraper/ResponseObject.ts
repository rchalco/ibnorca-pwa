export class ResponseObject<T> extends wraper.Response {
  code: string;
  object: T;
}
