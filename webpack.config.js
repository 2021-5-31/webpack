const baseConfig = require('./webpack.base')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
module.exports = (env) => {
  if (env === 'development') {
    return {
      ...baseConfig,
      ...devConfig
    }
  } else if (env === 'production') {
    return {
      ...baseConfig,
      ...prodConfig
    }
  }
}