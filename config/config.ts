// 获取环境变量
const ENV = import.meta.env
// 默认配置文件
const configSource: Object = {
  appCode: ENV.VITE_APP_CODE,
  projectEnv: ENV.VITE_APP_ENV,
  // 项目标识代码
  projectCode: `${ENV.VITE_APP_CODE}_${ENV.VITE_APP_ENV}`,
  // 项目名
  projectName: ENV.VITE_APP_NAME,
  // 项目描述
  projectDesc: ENV.VITE_APP_DESCRIPTION,
  // 资源base地址
  base: ENV.VITE_BASE,
  // 接口代理URL路径
  baseUrl: ENV.VITE_BASE_URL,
  // 模拟数据接口路径
  // mockBaseUrl: ENV.VITE_BASE_MOCK_URL,
  // 服务端接口路径
  serverUrl: ENV.VITE_BASE_SERVER_URL,
}

export { configSource }
