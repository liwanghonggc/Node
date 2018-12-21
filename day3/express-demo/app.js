var express = require('express');

//创建服务器应用程序,就是原来的http.createServer
var app = express();

// 在 Express中开放资源就是一个API的事儿
// 公开指定目录
// 只要这样做了,你就可以直接通过/public/xx的方式访问public目录中的所有资源了
app.use('/public/', express.static('./public/'));
app.use('/static/', express.static('./static/'));
app.use('/node_modules/', express.static('./node_modules/'));

//服务器收到get请求时,执行回调处理函数
app.get('/', function(req, res){
    res.send('hello express');
});

app.listen(3000, function(){
    console.log('app is running');
});