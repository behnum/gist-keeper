var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/assets/main.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "assets/scripts.bundle.js"
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      "title": "Webpack Starter",
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/index.ejs"
    })
  ]
};
