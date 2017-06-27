const defaultOptions = {
  formatter: require('eslint-friendly-formatter'),
  fix: true
}
module.exports = ({ include,exclude, options = defaultOptions }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: 'pre',
        loader: 'eslint-loader',
        options,
      },
    ],
  },
});