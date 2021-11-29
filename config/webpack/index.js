const { merge } = require('webpack-merge');
// const path = require('path')
const devConfig = require('./dev.config')
const proConfig = require('./pro.config')
const baseConfig = require('./base.config')

const env = process.env.NODE_ENV

module.exports = (defaultConfig)=>{
  // 函数内可以直接修改defaultConfig，也可以返回一个要被合并的对象
  if(env === 'production'){
    // 线上环境
    return merge(baseConfig,proConfig)
  }else{
    // 开发环境
    return merge(baseConfig,devConfig)
  }
}
