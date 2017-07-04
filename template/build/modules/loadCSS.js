const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractPlugin = new ExtractTextPlugin({
  filename: '[name].css',
})
const config = require('../../config/development.config')
// const postcssPlugins = [...config.postcssPlugins,'autoprefixer'].map(item => `require(${item})`)
const useCommon = [
  'css-loader',
  'postcss-loader'
]
const useDevelop = [
  'style-loader',
  ...useCommon
]
const useProduciton = extractPlugin.extract({
  use: useCommon,
  fallback: 'style-loader',
})
let use = process.env.NODE_ENV === 'production' ? useProduciton : useDevelop

module.exports = ({ include, exclude } = {}) => {
  let defaults = {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use
        },
        {{#usePreCSS}}
        {
          include: [path.reslove(__dirname,'../../src')],
          exclude,
          {{#if_eq preCSS "less"}}
          test: /\.less$/,
          use: [...use,'less-loader'],
          {{/if_eq}}
          {{#if_eq preCSS "sass"}}
          test: /\.(scss|sass)$/,
          use: [...use,'sass-loader'],
          {{/if_eq}}
        },
        {{/usePreCSS}}
      ],
    }
  }
  if (process.env.NODE_ENV === 'production') {
    defaults.plugins = [extractPlugin]
  }
  return defaults
}
