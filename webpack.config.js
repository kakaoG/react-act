const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 压缩插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理dist目录
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 从js中抽离出css
const commonConfig = require('./webpack.common.config');

const prodConfig = {
  mode: 'production',
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash:5].css',
      allChunks: true
    })
  ],
};

module.exports = merge(commonConfig, prodConfig);
