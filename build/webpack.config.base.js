const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')
const {
  VueLoaderPlugin
} = require('vue-loader')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: process.env.NODE_ENV || 'production',
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  module: {
    rules: [{
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre' //先检查再用vue-loader
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            //静态资源单独放置文件夹
            name: 'resources/[path][name].[hash:8].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = config
