const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devServer: {
        contentBase: './docs',
    },
    plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      title: 'pranav sruthi',
      template: "./src/index.html",
      filename: "./index.html"
     }),
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
       rules: [
      {
        test: /\.s[ac]ss$/i,
             use: [
               'style-loader',
               'css-loader',
               'sass-loader',
             ],
     },
     {
             test: /\.(png|svg|jpg|jpeg|gif)$/,
             use: [
           'file-loader',
             ],
           },
         ],
       },
};