const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const ExtractPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//合并webpack config
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const defalutPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  hot: true
}

let config
if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    entry: path.join(__dirname, '../practice/index.js'),
    module: {
      rules: [{
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          // {
          //     loader: 'css-loader',
          //     options: {
          //         module: true,
          //         localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
          //     }
          // },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      }],
    },
    devServer,
    //import vue from 'vue'
    resolve: {
      alias: {
        'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
      }
    },
    plugins: defalutPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js'),
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [{
        test: /\.styl/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ],
        // use: ExtractPlugin.extract({
        //   fallback: 'vue-style-loader',
        //   use: [
        //     'css-loader',
        //     {
        //       loader: 'postcss-loader',
        //       options: {
        //         sourceMap: true,
        //       }
        //     },
        //     'stylus-loader'
        //   ]
        // })
      }]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true
    },
    plugins: defalutPlugins.concat([
      new MiniCssExtractPlugin({
        chunkFilename: 'styles.[contenthash:8].css'
      }),
    ])
  })
}

module.exports = config
