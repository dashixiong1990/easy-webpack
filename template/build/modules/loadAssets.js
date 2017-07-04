const config = require('../../config/development.config.js')
module.exports = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          limit: config.image.limit,
          name: config.image.name,
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  }
})
