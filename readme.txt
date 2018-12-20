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
