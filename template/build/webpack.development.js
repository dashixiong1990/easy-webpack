const merge = require('webpack-merge')
{{#if_eq projectScale "simple"}}
const devServer = require('./modules/devServer')
{{/if_eq}}

module.exports = merge([
  {{#if_eq projectScale "simple"}}
  // webpack devserver
  devServer
  {{/if_eq}}
])
