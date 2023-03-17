// Craco 配置文件
const CracoLessPlugin = require('craco-less');
const CracoCSSModules = require('craco-css-modules');
const path = require('path');
const resolve = pathname => path.resolve(__dirname, pathname);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    }
  },
  plugins: [
    { // LessLoader插件加载
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            module: true,
          },
        },
      },
    },
    {
      plugin: CracoCSSModules,
    }
  ],
  style: {
    modules: {
      localIdentName: '[local]--[hash:base64:5]',
      exportLocalsConvention: 'camelCase',
    },
  },
};
