module.exports = {
  mode: 'development',
  devServer: {
    proxy: {
      // 接口调试
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      }
    },
  },
}