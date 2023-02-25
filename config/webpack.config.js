const development = require("./webpack/webpack.dev");
const production = require("./webpack/webpack.prod");
const common = require("./webpack/webpack.common");

const { merge } = require("webpack-merge");

module.exports = (_env, argv) => {
  const isDevelopment = argv.mode === "development";
  const config = isDevelopment ? development : production;
  return merge(common, config);
};
