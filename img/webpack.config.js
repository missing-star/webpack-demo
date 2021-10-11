const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        // 无法处理src加载的图片
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 8192,
          // 哈希10位+'.'+原扩展名
          name: '[hash:10].[ext]'
        },
        type: 'javascript/auto'
      },
      {
        test: /\.html$/,
        // 处理html imgtup，负责引入，被url-loader处理
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}