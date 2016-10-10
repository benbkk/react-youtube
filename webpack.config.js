const path = require('path')
const webpack = require('webpack')
const cssNext = require('postcss-cssnext')
const postcssImport = require('postcss-import')
const postcssUrl = require('postcss-url')
const postcssBrowserReporter = require('postcss-browser-reporter')
const postcssReporter = require('postcss-reporter')
const postcssPxtorem = require('postcss-pxtorem')
const postcssFontSmoothing = require('postcss-font-smoothing')
const rucksackCss = require('rucksack-css')
const lostGrid = require('lost')


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1', 'react-hmre']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  postcss: function () {
    return [
      postcssImport(),
      postcssUrl(),
      cssNext(),
      postcssPxtorem(),
      postcssBrowserReporter(),
      postcssReporter(),
      postcssFontSmoothing(),
      rucksackCss(),
      lostGrid()
    ];
  }
};
