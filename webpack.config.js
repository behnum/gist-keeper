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
    new webpack.ProvidePlugin ({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      "title": "Gist Keeper",
      "files": {
        "js": [ "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ] // FIXME: Test it
      },
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/index.ejs"
    })
  ]
};
