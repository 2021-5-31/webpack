const loaderUtils = require('loader-utils')
module.exports = (sourceCode) => {
  // loader的原理是将源码做一些处理，然后再返回处理后的代码
  // loader options的配置都在this里面
  loaderUtils.getOptions(this)
  return sourceCode
}