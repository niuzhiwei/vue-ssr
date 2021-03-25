const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//合并webpack config
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

let config

config = merge(baseConfig, {
  target: 'node',
  devtool: 'source-map',
  entry: path.join(__dirname, '../client/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [{
      test: /\.styl/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        },
        'stylus-loader'
      ],
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: 'styles.[contenthash:8].css'
    }),
    new webpack.defalutPlugins({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin()
  ]
})


module.exports = config
