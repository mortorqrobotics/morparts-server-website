"use strict";

let path = require("path");
let webpack = require("webpack");
let htmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let StatsPlugin = require("stats-webpack-plugin");

const basicPath = __dirname + "/website/src";

module.exports = {
  entry: {
    home: basicPath + "/home/components/Home.js",

  },
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "[name]-[hash].min.js",
    publicPath: "/[name]",
  },
  plugins: [
   new HtmlWebpackPlugin({
     template: "/website/page.html.ejs",
     inject: 'body',
     filename: 'index.html'
   }),
   new webpack.optimize.OccurrenceOrderPlugin(),
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin(),
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify('development')
   }),
 ],
}
