const path = require('path')
const FilenameList = require('./plugins/filenameList')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].bundle.js',
    // library: 'MyLibrary' //输出打包结果，变量名为MyLibrary
  },
  // module: {
  //   rules: [
  //     {
  //       test: /main\.js$/,
  //       use: [//可以简写成 use:['loader1','loader2']
  //         {
  //           loader: './loaders/loader1',//也可以写成loader1?a=b
  //           options: {
  //             a: 'b' //自定义key和value
  //           }
  //         },
  //         {
  //           loader: 'loader2',//也可以写成loader2?c='d'
  //           options: {
  //             c: 'd' //自定义key和value
  //           }
  //         }
  //       ]
  //     },//规则1
  //     // {}规则2
  //   ]
  // },
  plugins: [new FilenameList('文件名列表.txt')],
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
}