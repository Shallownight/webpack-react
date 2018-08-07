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
        // include: [path.resolve(__dirname, 'src')],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // css解析
      {
        test: /\.css$/,
        use: [
          // 加载器的执行顺序是从后往前的，所以style-loader在css-loader前面。顺序很重要。
          // style-loader用于将预处理后的css插入到页面
          {loader: 'style-loader'},
          // css-loader用于将css文件预处理成模块然后打包到构建文件中，并不会插入页面
          {loader: 'css-loader'}
        ]
      },
      // 图片解析
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin()
  ]
}