// webpack cdn plugin
function CdnPlugin () {}

CdnPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function (stats) {
    console.log(stats)
  })
}

module.exports = CdnPlugin
