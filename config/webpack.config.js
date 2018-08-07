const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  // 打包入口
  entry: {
    app: path.join(__dirname, '../src/app.js')
  },
  // 打包出口
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      // Babel-loader，将非es5语法转化为es5语法
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLPlugin()
  ]
}