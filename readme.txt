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

10、修改完代码自动重启
    1) 安装nodemon,它是Node.JS开发的一个第三方命令行工具,需要独立安装
       npm install --global nodemon
    2) 安装完毕之后,使用
       nodemon app.js

11、静态服务
    看express-demo中的app.js

12、在Express中配置使用art-template模板引擎
   1) 安装
      npm install --save art-template
      npm install --save express-art-template

   2) 配置
      var app = express();
      app.engine('html', require('express-art-template'))

   3) 使用
      app.get('/', function(req, res){
        //默认会去项目中的views目录查找index.html
        res.render('index.html', {
            title : 'Hello World'
        });
      });

13、在Express中获取表单POST请求体数据
   在Express中没有内置获取表单POST请求体的API,这里需要使用一个第三方包body-parser
   1) 安装
      npm install --save body-parser
   2) 配置
      var bodyParser = require('body-parser');
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
   3) 获取
      var comment = req.body;

      获取get数据直接req.query就行了

14、使用Express进行CRUD操作
   1) 上来建好目录先
      npm init -y
      npm i -S express
      由于要用到bootstrap,安装一下npm i -S bootstrap

   2) 路由设计

15、MongoDB
   1) 安装并配置环境变量

   2) 启动
      在控制台输入mongod,默认在执行该命令的磁盘根目录下的/data/db(需要自己建立)存储数据
      如果想要修改目录,mongod --dbpath=数据存储目录

   3) 停止
      控制台Ctrl + C

   4) 连接数据库
      mongo

   5) 退出数据库
      exit

   6) 基本命令
      6.1) show dbs       查看数据库
      6.2) use 数据库名    切换到指定数据库名

16、在Node中如何操作MongoDB数据库
    看monggoose-demo中的demo1.js

17、path路径操作模块
    path.basename
    path.extname
    path.dirname
    path.parse()  --> 以上几个方法的综合

18、Node中的非模块成员
    在每个模块中,除了require、exports等模块相关的API之外,还有两个特殊的成员
    1)__dirname可以用来获取当前文件模块所属目录的绝对路径,不带文件名
    2)__filename可以用来获取当前文件的绝对路径,带文件名

        在文件操作中,使用相对路径是不可靠的,因为在文件操作路径中,相对路径设计的就是相对于执行node命令所处的路径,
    为了解决这个问题,可以将相对路径换为绝对路径,这是就可以用到__dirname和__filename,在拼接过程中,为了避免低级错误,
    可以使用path.join(__dirname, );进行拼接