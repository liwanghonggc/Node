var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//配置静态资源映射
app.use('/public/', express.static('./public/'));
// 配置使用 art-template 模板引擎
// 第一个参数,表示,当渲染以 .art 结尾的文件的时候,使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'));

// Express 为 Response 相应对象提供了一个方法：render
// render 方法默认是不可以使用,但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径,默认会去项目中的views目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到views目录中

// 如果想要修改默认的 views 目录,则可以
// app.set('views', render函数的默认路径)

// 配置 body-parser 中间件(插件,专门用来解析表单POST请求体)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var comments = [{
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
},
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
];

app.get('/', function (req, res) {
   res.render('index.html', {
       comments : comments
   });
});

app.get('/post', function (req, res) {
    res.render('post.html');
});

// 当以 POST 请求 /post 的时候,执行指定的处理函数
// 这样的话我们就可以利用不同的请求方法让一个请求路径使用多次
app.post('/post', function (req, res) {
    var comment = req.body;
    comment.dateTime = '2018-09-20';
    comments.unshift(comment);
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('running');
});
