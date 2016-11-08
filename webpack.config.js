var webpack = require("webpack");

plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
]

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
  }
};