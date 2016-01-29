'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var merge = require('webpack-merge');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname);
var DEMO_DIR = 'Examples';
var config = {
  paths: {
    src: path.join(ROOT_PATH, 'Libraries'),
    demo: path.join(ROOT_PATH, DEMO_DIR),
    demoIndex: path.join(ROOT_PATH, DEMO_DIR, '/UIExplorer/UIExplorerApp.web'),
  }
};

var mergeCommon = merge.bind(null, {
  resolve: {
    alias: {
      'react-native': 'ReactNativeWinJS',
      'ReactART': 'react-art'
    },
    extensions: ['', '.js', '.jsx', '.md', '.css', '.png', '.jpg'],
  },
  module: {
    loaders: [{
      test: /\.png$/,
      loader: 'url?limit=100000&mimetype=image/png',
      include: config.paths.demo,
    }, {
      test: /\.jpg$/,
      loader: 'file',
      include: config.paths.demo,
    }, {
      test: /\.json$/,
      loader: 'json',
    }, ]
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'winjs',
      blacklist: ['pages', 'lib'],
    }),
  ]
});

if (NODE_ENV === 'development') {
  var IP = '0.0.0.0';
  var PORT = 3000;
  module.exports = mergeCommon({
    ip: IP,
    port: PORT,
    devtool: 'source-map',
    entry:
      {
      'webpack' : [
        'webpack-dev-server/client?http://' + IP + ':' + PORT,
        'webpack/hot/only-dev-server'
        ],
        demo: config.paths.demoIndex
      },
    output: {
      path: __dirname,
      filename: '[name].js',
      sourceMapFilename: '[file].map',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlPlugin({
        template: path.join(ROOT_PATH, 'src/winjs_template.html'),
        filename: 'index.html',
        title: 'demo',
        chunks: ['react-native-winjs', 'demo']
      }),
    ],
    module: {
      preLoaders: [{
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [config.paths.demo, config.paths.src],
      }],
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?stage=1'],
        include: [config.paths.demo, config.paths.src],
        exclude: [/node_modules/]
      }, ]
    }
  });
}

if (NODE_ENV === 'production') {

  module.exports = mergeCommon({
    devtool: 'source-map',
    entry: {
      // tweak this to include your externs unless you load them some other way
      'react-native-winjs': ['react-native'],
      game2048: './Examples/2048/Game2048',
      movies: './Examples/Movies/MoviesApp.web',
      tictactoe: './Examples/TicTacToe/TicTacToeApp',
      uiexplorer: './Examples/UIExplorer/UIExplorerApp.web',
    },
    output: {
      path: './pages',
      filename: '[name].js',
      sourceMapFilename: '[file].map',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          'NODE_ENV': JSON.stringify('production'),
        }
      }),
      new webpack.optimize.DedupePlugin(),
//       new webpack.optimize.UglifyJsPlugin({
//         compress: {
//           warnings: false
//         },
//       }),
      new webpack.optimize.CommonsChunkPlugin('react-native-winjs', 'react-native-winjs.js'),
      new HtmlPlugin({
        template: 'src/winjs_template.html',
        filename: 'game2048.html',
        hash: true,
        title: 'Game2048',
        chunks: ['react-native-winjs', 'game2048']
      }),
      new HtmlPlugin({
        template: 'src/winjs_template.html',
        filename: 'movies.html',
        hash: true,
        title: 'Movies',
        chunks: ['react-native-winjs', 'movies']
      }),
      new HtmlPlugin({
        template: 'src/winjs_template.html',
        filename: 'tictactoe.html',
        hash: true,
        title: 'TicTacToe',
        chunks: [ 'react-native-winjs', 'tictactoe']
      }),
      new HtmlPlugin({
        template: 'src/winjs_template.html',
        filename: 'uiexplorer.html',
        hash: true,
        title: 'UIExplorer',
        chunks: ['react-native-winjs', 'uiexplorer']
      }),
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['babel?stage=1'],
        include: [config.paths.demo, config.paths.src],
      }]
    }
  });
}
