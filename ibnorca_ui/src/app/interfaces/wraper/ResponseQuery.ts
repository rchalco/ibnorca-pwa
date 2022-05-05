export class ResponseQuery<T> extends Response {
  listEntities: T[];
  state: number;
  message: string;
}
