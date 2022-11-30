const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /main\.js$/,
        use: [//可以简写成 use:['loader1','loader2']
          {
            loader: './loader/loader1',//也可以写成loader1?a=b
            options: {
              a: 'b' //自定义key和value
            }
          },
          {
            loader: 'loader2',//也可以写成loader2?c='d'
            options: {
              c: 'd' //自定义key和value
            }
          }
        ]
      },//规则1
      // {}规则2
    ]
  }

}