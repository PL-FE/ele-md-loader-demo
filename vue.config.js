const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // 使用自定义 loader
    config.module
      .rule("md-loader")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("md-loader")
      .loader(path.join(__dirname, "./md-loader/index.js"))
      .end();
  },
});
