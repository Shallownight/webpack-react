const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.js');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
        // mode = production时应该内置了UglifyJsPlugin，在这加上，js大小没有变化，但是可以控制uglify插件
        new UglifyJsPlugin(),
        new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: {
            source: false
        }
    })
  ],
})

