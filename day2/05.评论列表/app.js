var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('art-template');

var comments = [
    {
        name : '李旺红',
        message : '今天天气不错',
        dateTime : '2018-12-20'
    },
    {
        name : '许春杰',
        message : '今天天气不错',
        dateTime : '2018-12-20'
    },
    {
        name : '李旺红',
        message : '今天天气不错',
        dateTime : '2018-12-20'
    },
    {
        name : '李旺红',
        message : '今天天气不错',
        dateTime : '2018-12-20'
    },
    {
        name : '李旺红',
        message : '今天天气不错',
        dateTime : '2018-12-20'
    }
];

http
    .createServer(function (req, res) {
        var parseObj = url.parse(req.url, true);
        var pathname = parseObj.pathname;

        if(pathname === '/'){
          //跳转到首页
          fs.readFile('./views/index.html', function (err, data) {
              if(err){
                return res.end("Read index.html Fail");
              }else{
                var htmlStr = template.render(data.toString(), {
                  comments : comments
                });
                res.end(htmlStr);
              }
          });
        }else if(pathname === '/post'){
          //跳转到评论页
          fs.readFile('./views/post.html', function (err, data) {
              if(err){
                return res.end('Read File Fail');
              }
              res.end(data);
          });
        }else if(pathname.indexOf('/public/') === 0){
          //访问静态资源
          fs.readFile('.' + pathname, function (err, data) {
              if(err){
                return res.end("Read File Fail");
              }
              res.end(data);
          });
        }else if(pathname === '/pinglun'){
          //提交评论渲染首页
          var comment = parseObj.query;
          comment.dateTime = '2018-09-20';
          comments.unshift(comment);

          res.statusCode = 302;
          res.setHeader('Location', '/');
          res.end();
        }else{
          //访问页面不存在
          fs.readFile('./views/404.html', function (err, data) {
              if(err){
                  return res.end("File Not Found");
              }
              res.end('File Not Found');
          });
        }
})
    .listen(3000, function () {
        console.log("running");
    });