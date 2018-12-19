/**
   浏览器中的JavaScript是没有文件操作的能力的,但是Node中的JavaScript具有文件操作的能力

   fs是file-system的简写,就是文件系统的意思
   在Node中如果想要进行文件操作,就必须引入fs这个核心模块
   在fs这个核心模块中,就提供了所有的文件操作相关的 API
   例如:fs.readFile就是用来读取文件的
 */

//1.使用require方法加载fs核心模块
var fs = require('fs');

//2.读取文件
fs.readFile('01.helloworld.js', function(error, data){
    if(error){
        console.log('读取文件失败了');
    }else{
        console.log(data.toString());
    }
});

