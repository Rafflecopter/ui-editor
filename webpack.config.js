var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./js/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, 
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
      modulesDirectories: ["web_modules", "node_modules"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};