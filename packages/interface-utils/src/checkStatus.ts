import { codeMessage } from './const';

export function checkStatus(response) {
  // 如果http状态码正常，则直接返回数据
  if (response) {
    const { status, statusText } = response;
    if ((status >= 200 && status < 300) || status === 304) {
      // 如果不需要除了data之外的数据，可以直接 return response.data
      return response.data;
    }
    return {
      errorCode: status,
      errorMsg: codeMessage[status] || statusText
    };
  }
  // 异常状态下，把错误信息返回去
  return {
    errorCode: -404,
    errorMsg: '网络错误'
  };
}
