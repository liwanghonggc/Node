var fs = require('fs');
var http = require('http');
var template = require('art-template');

var server = http.createServer();

server.on('request', function (req, res) {
   fs.readFile('../resource/template-apache.html', function (err, data) {
       if(err){
           return console.log("Read File Error");
       }else{
           fs.readdir('D:/Others', function (err, files) {
               if(err){
                   return console.log("Read Files Error");
               }else{
                   var htmlStr = template.render(data.toString(), {
                       title : '模板引擎',
                       files : files
                   });
                   res.setHeader('Content-Type', "text/html; charset=UTF-8");
                   res.end(htmlStr);
               }
           });
       }
   });
});

server.listen(3000, function () {
    console.log("running");
});