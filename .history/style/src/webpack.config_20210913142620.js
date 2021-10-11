const { resolve } = require('path')

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 输出目录
  output: {
    filename: 'built.js',
    // __dirname 当前文件所在的绝对路径
    path: resolve(__dirname, 'build')
  },
  // loaders 配置
  module: {
    rules: [
      
    ]
  }
}