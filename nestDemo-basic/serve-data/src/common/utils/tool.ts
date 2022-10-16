/**
 * @description 在控制台打印日志。加入了长虚线作分割
 * @param text 行为名称
 */
export function puppeteerLog(text: string) {
  console.log(`------------- ${text}`);
}

/**
 * @description 设置localStorage
 * @param key
 * @param value
 */
export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

/**
 * @description 获取localStorage
 * @param key
 */
export function getLocalStorage(key: string): any {
  return localStorage.getItem(key);
}

/**
 * @description 打印请求日志
 * @param interceptedRequest
 */
export function logRequest(interceptedRequest) {
  if (interceptedRequest.url().includes('/api/fedweb')) {
    puppeteerLog(`A request was made: ${interceptedRequest.url()}`);
    puppeteerLog(`A request data: ${interceptedRequest.postData()}`);
    // puppeteerLog(
    //   `A request headers: ${JSON.stringify(interceptedRequest.headers())}`,
    // );
  }
}

/**
 * @description 打印响应日志
 * @param interceptedRequest
 */
export function logResponse(interceptedResponse) {
  puppeteerLog(`A response was made: ${interceptedResponse.url()}`);
}
