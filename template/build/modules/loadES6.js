module.exports = ({ include, exclude } = {}) => {
  let defaults = {
    module: {
      rules: [
        {{#if_eq compatibility "IE6"}}
          {
            test: /.js$/,
            loader: "es3ify-loader"
          },
        {{/if_eq}}
        {
          test:/\.js$/,
          exclude:/node_modules/,
          use:[
            {
              loader:"babel-loader",
              options:{
                {{#if_eq compatibility "modern"}}
                  presets:["es2015"]
                {{/if_eq}}
                {{#if_eq compatibility "IE6"}}
                  presets: [
                    ["env", {
                        "targets": {
                            "browsers": ["ie 6-8"]
                        },
                        "useBuiltIns": true
                    }]
                  ]
                {{/if_eq}}
              }
          }]
        }
      ]
    }
  }
  return defaults
}
