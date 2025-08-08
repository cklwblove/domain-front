import { ResponseError } from './ResponseError';

/**
 * 安全的JSON.parse
 */
export function safeJsonParse({
  data,
  throwErrIfParseFail = false,
  response = null,
  request = null
}) {
  try {
    return JSON.parse(data);
  } catch (e) {
    if (throwErrIfParseFail) {
      throw new ResponseError(response, 'JSON.parse fail', data, request, 'ParseError');
    }
  }
  return data;
}
