// 测试服配置
const PRODUCTION = process.env.NODE_ENV === 'production'

if (process.env.VUE_APP_MODE === 'dev') {
  // kaifa
} else if (process.env.VUE_APP_MODE === 'test') {
  // 测试环境
} else if (process.env.VUE_APP_MODE === 'stage') {
  // 灰度环境
} else if (process.env.VUE_APP_MODE === 'release') {
  // 正式环境
}

export {}
