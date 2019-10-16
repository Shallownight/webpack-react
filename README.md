npm run dev         启动项目  
npm run build       进行打包    

### 历史变更
1. 使用`clean-webpack-plugin`，在build时自动清除上次打包遗留文件

2. 使用`mini-css-extract-plugin`，分离JS和CSS文件    
作用：单独修改JS（或CSS）文件时，不会改变CSS（或JS）文件的hash值，有利于浏览器缓存。    
扩展：后续开发多页时，可以分离公用的JS文件。    

3. 生产环境配置中加上`uglifyjs-webpack-plugin`和`optimize-css-assets-webpack-plugin`，分别压缩JS和CSS代码 

4. 通过cross-env增加NODE_ENV

5. 将图片打包到图片文件夹（指定路径）

6. `html-webpack-plugin`引入模板文件, 可以在模板文件写一些全局的东西（引入SDK等）

7. 引入alias

8. externals根据官网配置，在devServer中仍然报错: Module not found，先记录

9. 使用`webpack-bundle-analyzer`进行打包分析，先允许build在dist文件夹生成分析文件，再用npm run bundle-report查看文件

10. 使用chunkSplit将node_module打包独立出来

11. 加入eslint，npm run eslint 校验