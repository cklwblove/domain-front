/**
 * nemo内置请求单例，默认使用原生 fetch
 */
declare class NemoCoreManager {
  static singleInstance: NemoCoreManager;
  static getSingleInstance(): NemoCoreManager;
  /**
   * request 请求
   * @param url 请求url
   * @param options fetch 请求配置
   */
  fetch(url: string, options?: {}): Promise<any>;
  /**
   * 使用外部传入的请求方法替换默认的fetch请求
   */
  useRequest(fetch: (url: string, options?: any) => Promise<any>): void;
}
declare const NemoCore: NemoCoreManager;

export { NemoCore };
