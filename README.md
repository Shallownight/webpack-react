npm run dev         启动项目  
npm run build       进行打包    

### 历史变更
1. 使用MiniCssExtractPlugin，分离JS和CSS文件    
作用：单独修改JS（或CSS）文件时，不会改变CSS（或JS）文件的hash值，有利于浏览器缓存。    
扩展：后续开发多页时，可以分离公用的JS文件。    

2. 生产环境配置中加上UglifyJsPlugin和OptimizeCSSAssetsPlugin，分别压缩JS和CSS代码   

3. HtmlWebpackPlugin 引入模板文件, 可以在模板文件写一些全局的东西（引入SDK等）

4. 引入alias

5. externals根据官网配置，在devServer中仍然报错: Module not found，先记录

6. webpack-bundle-analyzer 进行打包分析，先允许build在dist文件夹生成分析文件，再用npm run bundle-report查看文件