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
      {
        // 匹配的文件
        test: /\.css$/,
        // 使用的loader
        use: [
          // 执行顺序：下 -> 上
          // 创建style标签并载入到html中
          'style-loader',
          // 转换css文件为commonjs加载到js中
          'css-loader'
        ]
      },{
        // 匹配的文件
        test: /\.less$/,
        // 使用的loader
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ]
  },
  // 插件
  plugins: [],
  // development | production
  mode: 'development'
}