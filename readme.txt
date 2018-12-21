1、Node.JS是什么?
   既不是语言,也不是框架,它是一个平台

   Node.js 中的 JavaScript
     1) 没有BOM、DOM
     2) EcmaScript 基本的 JavaScript 语言部分
     3) 在Node中为JavaScript提供了一些服务器级别的API
        文件操作的能力
        http服务的能力

2、Node.JS中核心模块
   1) 获取机器信息os
      os.cpus();     获取机器的CPU信息
      os.totalmem(); 获取机器的内存
   2) 操作路径path
   3) 文件读写fs
   4) HTTP服务http

3、Node模块系统
   1) 没有全局作用域,只有模块作用域
   2) 模块完全是封闭的,外部无法访问内部,内部也无法访问外部
   3) 相对路径./不要省略,可以省略后缀名

   既然是模块作用域,如何让模块与模块之间进行通信?

4、在Node中使用模板引擎
   1) 下载,在Terminal中进入day2目录下,执行npm install art-template命令,会自动下载并放入node-modules目录

5、模块原理
   导出多个成员 exports.xxx = xxx
   导出单个成员 module.exports = xxx

6、npm
   1) 常用命令
      npm init -y               可以快速跳过向导,快速生成package.json文件
      npm install               一次性把dependencies选项中的依赖全部安装
      npm install 包名          只下载
      npm install --save 包名   下载并保存依赖
      npm uninstall 包名        只删除,依赖项会保存
      npm uninstall --save 包名 删除且删除依赖信息

   2) 解决npm被墙或者速度慢问题
      安装淘宝的cnpm, npm install --global cnpm
      接下来安装包的时候将之前的npm换成cnpm,如cnpm install jquery

7、package.json
   我们建议每一个项目都要有一个package.json文件(包描述文件),可以使用npm init来生成该文件,格式如下
   {
     "name": "npm-demo",
     "version": "0.0.1",
     "description": "这是一个测试项目",
     "main": "main.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "lipengzhou",
     "license": "ISC",
     "dependencies": {
       "art-template": "^4.12.2",
       "jquery": "^3.2.1"
     }
   }

8、Express的Demo
   1) 创建目录mkdir express-demo
   2) 生成package.json文件npm init -y
   3) 安装express,npm i -S express

9、路径问题
   1) 文件操作中的相对路径可以省略./,在模块加载中相对路径中的./不能省略
   2) 咱们所使用的所有文件操作的 API 都是异步的


