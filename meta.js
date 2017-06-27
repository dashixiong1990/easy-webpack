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
      "default": "A Vue.js project"
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
          name: "简单的专题页,无需后端",
          "value": "simple",
        },
        {
          name: "需要与后端连调，代理请求",
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
      "type": "list",
      "message": "使用哪种CSS预处理器",
      "choices": [
        {
          name: "sass/scss",
          "value": "sass",
        },
        {
          name: "less",
          "value": "less",
        },
        {
          name: "styl",
          "value": "styl",
        },
      ]
    },
    "cssPosition": {
      "type": "list",
      "message": '生成后的CSS内容如何处理',
      "choices": [
        {
          "name": "单独提取出一个文件 link标签引入",
          "value": "link",
          "short": "link"
        },
        {
          "name": "style标签内联在html文件中",
          "value": "style",
          "short": "style"
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
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
