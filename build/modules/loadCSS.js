const ExtractTextPlugin = require('extract-text-webpack-plugin')
const plugin = new ExtractTextPlugin({
  filename: '[name].css',
})
module.exports = ({ include, exclude } = {}) => {
  let defaults = {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: ['style-loader', 'css-loader'],
        },
      ],
    }
  }
  if (process.env.NODE_ENV === 'production') {
    defaults[plugins] = [plugin]
  }
  return defaults
};
