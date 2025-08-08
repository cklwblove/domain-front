/**
 * 请求报错
 */
export class RequestError extends Error {
  private request: any;
  private type: string;
  constructor(text, request, type = 'RequestError') {
    super(text);
    this.name = 'RequestError';
    this.request = request;
    this.type = type;
  }
}
