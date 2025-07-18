/**
 * 响应异常
 */
export class ResponseError extends Error {
  private data: any;
  private response: any;
  private request: any;
  private type: string;
  constructor(response, text, data, request, type = 'ResponseError') {
    super(text || response.statusText);
    this.name = 'ResponseError';
    this.data = data;
    this.response = response;
    this.request = request;
    this.type = type;
  }
}
