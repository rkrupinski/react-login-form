const { resolve } = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill', // see https://github.com/facebook/react/issues/8379
    'react-hot-loader/patch',
    resolve(__dirname, '..', 'src', 'index.jsx'),
  ],

  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    contentBase: resolve(__dirname, '..', 'build'),
    hot: true,
    open: true,
    inline: true,
    publicPath: '/',
    setup(app) {
      app.use(bodyParser.json());

      app.post('/api/v1/auth', function (req, res) {
        const { email, password } = req.body;

        if (email === 'test@test.pl' && password === 'Password1') {
          res.end();
        } else {
          res.status(400).end();
        }
      });
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src', 'index.ejs'),
      title: 'react-login-form dev',
    }),
  ],

  performance: {
    hints: false,
  },
};
