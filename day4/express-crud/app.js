var express = require('express');
var fs = require('fs');
var router = require('./router');
var bodyParser = require('body-parser');

var app = express();

//设置静态资源映射
app.use('/public/', express.static('./public/'));
app.use('/node_modules/', express.static('./node_modules/'));

//配置使用art-template模板引擎
app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//将路由容器挂载到app服务中
app.use(router);

app.listen(3000, function () {
    console.log('running');
});