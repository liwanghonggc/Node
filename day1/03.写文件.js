/**
   浏览器中的JavaScript是没有文件操作的能力的,但是Node中的JavaScript具有文件操作的能力

   fs是file-system的简写,就是文件系统的意思
   在Node中如果想要进行文件操作,就必须引入fs这个核心模块
   在fs这个核心模块中,就提供了所有的文件操作相关的 API
   例如:fs.readFile就是用来读取文件的
 */

//1.使用require方法加载fs核心模块
var fs = require('fs');

//2.写文件,参数为文件路径、文件内容、回调函数
fs.writeFile('../data/data.txt', '大家好才是真的好', function (error) {
    if (error) {
        console.log('写入失败')
    } else {
        console.log('写入成功了')
    }
});

