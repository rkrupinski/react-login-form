const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  entry: {
    main: resolve(__dirname, '..', 'src', 'index.jsx'),
    vendor: [
      'axios',
      'babel-polyfill', // see https://github.com/facebook/react/issues/8379
      'normalize.css',
      'prop-types',
      'react',
      'react-dom',
      'react-hot-loader',
      'react-redux',
      'recompose',
      'redux',
      'redux-thunk',
      'styled-components',
      'tinycolor2',
      'validator',
    ],
  },

  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[chunkhash].[name].js',
    publicPath: '/',
  },

   plugins: [
    new CleanWebpackPlugin(['build'], {
      root: resolve(__dirname, '..'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor',
        'manifest'
      ],
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..' ,'src', 'index.ejs'),
      title: 'react-login-form',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new PreloadWebpackPlugin(),
    ...process.env.ANALYZE_BUNDLE ?
        [ new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)() ] :
        [],
  ],
};
