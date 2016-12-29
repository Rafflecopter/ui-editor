var path = require("path"),
    webpack = require("webpack"),
    cloneDeep = require('lodash.clonedeep');

var defaults = {
  entry: "./js/entry.js",
  output: {
    path: path.join(__dirname, "js"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, 
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  // resolve: {
  //     modulesDirectories: ["web_modules", "node_modules"]
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    })
  ]
};

var minimized = cloneDeep(defaults);

minimized.plugins.push(new webpack.optimize.UglifyJsPlugin());
minimized.output.filename = 'bundle.min.js';

module.exports = [defaults, minimized];