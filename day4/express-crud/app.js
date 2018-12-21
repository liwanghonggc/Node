var express = require('express');
var fs = require('fs');

var app = express();

//设置静态资源映射
app.use('/public/', express.static('./public/'));
app.use('/node_modules/', express.static('./node_modules/'));

//配置使用art-template模板引擎
app.engine('html', require('express-art-template'));

app.get('/', function (req, res) {
    fs.readFile('./db.json', 'utf-8', function (err, data) {
        if(err){
            return res.status(500).send('Server error!');
        }
        res.render('index.html', {
            //从文件中读取的是字符串,这里要转成对象
            students : JSON.parse(data).students
        });
    });

});

app.listen(3000, function () {
    console.log('running');
});