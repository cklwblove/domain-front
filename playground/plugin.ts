import type { IApi } from '@winner-fed/winjs';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    return $;
  });

  // meta 添加缓存参数
  api.addHTMLMetas(() => [
    {
      'http-equiv': 'Cache-Control',
      content: 'no-store, no-cache, must-revalidate'
    },
    {
      'http-equiv': 'Pragma',
      content: 'no-cache'
    },
    {
      'http-equiv': 'Expires',
      content: '0'
    }
  ]);
};
