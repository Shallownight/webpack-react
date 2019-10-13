const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.js');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
})

