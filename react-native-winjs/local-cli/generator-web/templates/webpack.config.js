'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var IP = '0.0.0.0';
var PORT = 3000;
var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname, '..');
var PROD = 'production';
var DEV = 'development';
let isProd = NODE_ENV === 'production';

var config = {
  paths: {
  	libs: path.join(ROOT_PATH, 'node_modules/react-native-winjs/lib'),
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index.web'),
  },
};

module.exports = {
  ip: IP,
  port: PORT,
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-native': 'react-native-winjs',
      'ReactNativeART': 'react-art',
    },
    extensions: ['', '.js', '.jsx', '.ios.js', '.jpg', '.png', '.css', '.md'],
  },
  entry: isProd? [
    config.paths.index
  	]: {
      'app' : [
        'webpack-dev-server/client?http://' + IP + ':' + PORT,
//        'webpack/hot/only-dev-server',
        config.paths.index
        ]
      },
  output: {
    path: path.join(__dirname, 'output'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-native-winjs']
    }),
    new webpack.DefinePlugin({
      	'process.env': {
        'NODE_ENV': JSON.stringify(isProd? PROD: DEV),
      }
    }),
    !isProd? new webpack.ProvidePlugin({
      React: "react"
    }): new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin({
        template: path.join(ROOT_PATH, 'node_modules/react-native-winjs/src/winjs_template.html'),
        filename: 'index.html',
      }),
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.jsx?$/,
      loaders: [/*'react-hot', */'babel?stage=1&compact=false'],
      include: [config.paths.src],
      exclude: ['node_modules','web']
    }, ]
  }
};
