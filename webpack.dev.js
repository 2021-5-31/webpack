module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true //修改请求头host为localhost:3000
      }
    },
    open: true,
    // port: 8000,
    openPage: 'html/index.html'
  }
}