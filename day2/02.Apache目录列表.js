var http = require('http');
var fs = require('fs');

var server = http.createServer();

var dir = "D:/Others";

server.on('request', function(req, res){
  fs.readFile("../resource/template.html", function (err, data) {
    if(err){
      res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
      return res.end('读取文件失败');
    }else{
      fs.readdir(dir, function (err, files) {
          if(err){
              res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
              return res.end('读取目录失败');
          }else{
            //生成需要替换的内容
            var content = '';
            files.forEach(function (item) {
                content += `
                              <tr>
                                <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
                                <td class="detailsColumn" data-value="0"></td>
                                <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                              </tr>
                           `;
            });
            data = data.toString();
            //replace方法是有返回值的,需要重新用data接收下
            data = data.replace('$@', content);

            res.setHeader('Content-Type', 'text/html; charset=UTF-8');
            res.end(data);
          }
      });
    }
  });
});

server.listen(3000, function () {
    console.log("running");
});