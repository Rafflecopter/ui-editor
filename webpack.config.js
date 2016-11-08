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
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  resolve: {
      modulesDirectories: ["web_modules", "node_modules", "bower_components"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};