import Request from './request'
import type { AxiosResponse } from 'axios'

import type { RequestConfig } from './request/types'

/* 公司的柏霖 缩写 BL */
export interface BLResponse<T> {
  statusCode: number
  desc: string
  result: T
}

// 重写返回类型
interface BLRequestConfig<T, R> extends RequestConfig<BLResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {BLRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const blRequest = <D = any, T = any>(config: BLRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<BLResponse<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default blRequest
