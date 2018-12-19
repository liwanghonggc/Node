/**
  接下来,我们要干一件使用Node很有成就感的一件事儿
  你可以使用Node非常轻松的构建一个Web服务器
  在Node中专门提供了一个核心模块:http
  http这个模块的职责就是帮你创建编写服务器的
 */

//1.加载HTTP核心模块
var http = require('http');

//2.使用http.createServer()方法创建一个Web服务器
var server = http.createServer();

//3.服务可以干嘛?
server.on('request', function () {
    console.log('收到客户端的请求了');
});

//4.绑定端口号,启动服务器
server.listen(3000, function () {
    console.log('服务器启动成功了,可以通过http://127.0.0.1:3000/来进行访问');
});