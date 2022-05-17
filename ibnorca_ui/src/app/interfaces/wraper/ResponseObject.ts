export class ResponseObject<T> {
  code: string;
  object: T;
  state: number;
  message: string;
}
