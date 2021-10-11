const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: []
  },
  plugins: [
    // 创建空白html文件，引入资源文件（js，css）
    new HtmlWebpackPlugin({
      // 使用模板创建html文件（copy），引入资源文件（js，css）
      template: './src/index.html'
    })
  ],
  mode: 'development'
}