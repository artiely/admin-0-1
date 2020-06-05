const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  // 不是这个 https://www.npmjs.com/package/style-resources-loader
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/style/var.less")] // 引入全局样式变量
    }
  },
  // https://github.com/ant-design/ant-motion/issues/44
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@views": resolve("src/views"),
        "@components": resolve("src/components"),
        "@assets": resolve("src/assets"),
        "@router": resolve("src/router"),
        "@common": resolve("src/common"),
        "@store": resolve("src/store"),
        "@layout": resolve("src/layout"),
        "@api": resolve("src/api"),
        "@config": resolve("src/config")
      }
    }
  }
};
