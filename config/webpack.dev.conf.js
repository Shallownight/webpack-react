const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.js');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3334
  }
})

