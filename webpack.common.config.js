const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 在html中插入js

module.exports = {
  entry: {
    app: [path.join(__dirname, 'src/index.jsx')],
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js', // 文件添加hash 避免缓存
    publicPath : '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  resolve: {
    extensions:[".js",".jsx","css","less","scss","png","jpg"],
    alias: { // 绝对路径别名配置
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
