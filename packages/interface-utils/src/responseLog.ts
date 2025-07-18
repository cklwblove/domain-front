import Qs from 'qs';

export function responseLog(response) {
  if (process.env.NODE_ENV === 'development') {
    const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)})`;
    console.log(
      '%c┍------------------------------------------------------------------┑',
      `color:${randomColor};`
    );
    console.log('| 请求地址：', response.config.url);
    console.log('| 请求参数：', Qs.parse(response.config.data));
    console.log('| 返回数据：', response.data);
    console.log(
      '%c┕------------------------------------------------------------------┙',
      `color:${randomColor};`
    );
  } else {
    console.log('| 请求地址：', response.config.url);
    console.log('| 请求参数：', Qs.parse(response.config.data));
    console.log('| 返回数据：', response.data);
  }
}
