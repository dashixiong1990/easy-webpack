const commonConfig = require('./build/webpack.common.js')
const developmentConfig = require('./build/webpack.development.js')
const productionConfig = require('./build/webpack.production.js')
const merge = require('webpack-merge')

module.exports = (NODE_ENV) => {
  if (NODE_ENV === 'production') {
    return merge(commonConfig, productionConfig)
  }
  return merge(commonConfig, developmentConfig)
};
