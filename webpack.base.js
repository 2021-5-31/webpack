const path = require('path')
const FilenameList = require('./plugins/filenameList')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].bundle.js',
    publicPath: '/'
    // library: 'MyLibrary' //输出打包结果，变量名为MyLibrary
  },
  module: {
    // noParse: /jquery/, // 不解析已经完成打包的模块或者文件内没有import,require的导入模块，提高构建速度
    rules: [
      // {
      //   test: /main\.js$/,
      //   use: [//可以简写成 use:['loader1','loader2']
      //     {
      //       loader: './loaders/loader1',//也可以写成loader1?a=b
      //       options: {
      //         a: 'b' //自定义key和value
      //       }
      //     },
      //     {
      //       loader: 'loader2',//也可以写成loader2?c='d'
      //       options: {
      //         c: 'd' //自定义key和value
      //       }
      //     }
      //   ]
      // },//规则1
      // {}规则2
      {
        test: /\.(png)|(jpg)$/,
        use: [
          {
            loader: 'file-loader', //在dist目录生成导入的文件
            options: {
              name:'img/[name].[hash:5].[ext]'
            }
          },
          // {
          //   loader: 'url-loader', // 将图片转成base64
          // }
        ]
      },
      {
        test:/\.scss$/,
        use: ['style-loader', "css-loader", 'sass-loader']
      },
      {
        test:/\.js$/,
        // exclude: /jquery/, //像jquery这种库已经做了代码转换，就不需要再进行babel处理
        // include: /src/, //表示src目录下的文件都要babel处理
        // use: ['cache-loader', 'babel-loader'], //cache-loader 可以缓存loader结果，提高构建速度
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    // new FilenameList('文件名列表.txt'),
    new CleanWebpackPlugin(), //清除dist文件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'html/index.html'
    }), //自动生成./dist/index.html
    // new CopyPlugin({
    //   patterns: [
    //     { from: "./public", to: "./" }
    //   ]
    // }), //复制静态资源
  ],
  // resolve:{
  //   modules: ['node_modules'], //node_modules查找位置
  //   extensions: ['.js', '.css', '...'], //按照顺序查找文件后缀名
  //   alias: {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // },
  // externals: {
  //   jquery: '$',
  //   vuex: 'Vuex'
  // } //不打包依赖，使用cdn引入
  stats: { //webpack编译时，控制台的显示信息
    modules: false
  }
}