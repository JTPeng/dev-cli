const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { resolvePath, env } = require('./util')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const serveConfig = {
  mode: 'development',
  output: {
    path: resolvePath('../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]-async.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    static: {
      directory: resolvePath('dist'),
      publicPath: '/',
    },
    // contentBase: "../dist", // 新版已废除
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
if (env === 'size') {
  serveConfig.plugins.push(new BundleAnalyzerPlugin())
}

const config = merge(commonConfig, serveConfig)
module.exports = config
