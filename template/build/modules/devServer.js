const config = require('../../config/development.config')
module.exports = {
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host: config.host, // Defaults to `localhost`
    port: config.port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true,
    },
  }
}
