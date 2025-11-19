const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 引入path模块
const path = require('path')
// // 方式一：resolve获得当前路径
// console.log(path.resolve())
// // 方式二：join拼接路径
// console.log(path.join(__dirname, './dist'))

const config = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /(.scss|.sass)$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
              limit: 10000,
              name: '[name].[ext]',
              outputPath: 'imgs/'
              }
            }
          ]
        },
        {
          test: /.js$/,
          loader: 'babel-loader'
        }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index-dev.html',  // 指定 HTML 模板文件 在根目录下创建index.html作为模板文件
      filename: 'index.html',     // 输出的 HTML 文件名（默认也是 index.html）
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
    patterns:[ // v5.0版本无需patterns包裹，v6.0需要加一层patterns
        {
          from: path.join(__dirname, 'assets'), // 源文件路径
          to: 'assets' // 目标路径
        }
      ]
    }),
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' })
  ],
  devServer: {
    hot: true
  }
}

module.exports = config
