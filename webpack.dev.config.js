const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config');

const devConfig = {
  // entry: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')],
  entry: {
    app: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')],
  },
  output: {
    // filename: 'bundle.js',
    // chunkFilename: '[name].js',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js' // 文件添加hash 避免缓存
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    proxy:  {
      '/userApi': {
        target: 'http://cgi.gstyun.local',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/userApi': ''   //需要rewrite的,
        }
      },
      '/actApi': {
        target: 'http://ec.gstyun.local',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/actApi': ''   //需要rewrite的,
        }
      },
    }
  },
};

module.exports = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);
