module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "projectScale": {
      "type": "list",
      "message": "项目规模",
      "choices": [
        {
          "name": "简单的专题页,无需代理请求",
          "value": "simple",
        },
        {
          "name": "需要与后端连调，代理请求",
          "value": "complex",
        }
      ]
    },
    "compatibility": {
      "type": "list",
      "message": "浏览器兼容性",
      "choices": [
        {
          "name": "现代浏览器",
          "value": "modern",
          "short": "modern"
        },
        {
          "name": "IE6+",
          "value": "IE6",
          "short": "ie6"
        }
      ]
    },
    "usePreCSS": {
      "type": "confirm",
      "message": "使用CSS预处理器?"
    },
    "preCSS": {
      "when": "usePreCSS",
      "type": "list",
      "message": "使用哪种CSS预处理器",
      "choices": [
        {
          "name": "scss",
          "value": "sass",
        },
        {
          "name": "less",
          "value": "less",
        }
      ]
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "Airbnb (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "lintjavascript": "lint",
    "build/modules/devServer.js": "projectScale == 'simple'",
    "build/modules/proxyServer.js": "projectScale == 'complex'"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
