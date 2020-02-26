const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const withImages = require("next-images");

module.exports = withImages({
  webpack: config => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }

    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },
  target: "serverless"
});
