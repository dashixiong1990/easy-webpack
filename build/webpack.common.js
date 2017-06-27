const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')
const lintJavaScript = require('./modules/lintJavascript')

const PATHS = {
  src: path.join(__dirname, '../src/main'),
  dest: path.join(__dirname, '../dist'),
};

module.exports = merge([
  {
    entry: {
      app: PATHS.src,
    },
    output: {
      path: PATHS.dest,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname,'../src/index.html'),
      }),
    ],
  },
  lintJavaScript({ include: PATHS.src }),
]);