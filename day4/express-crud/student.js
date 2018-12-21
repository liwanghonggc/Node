var fs = require('fs');

var dbPath = './db.json';

//获取学生列表
exports.find = function (callback) {
  fs.readFile(dbPath, 'utf-8', function (err, data) {
      if(err){
          return callback(err);
      }
      callback(null, JSON.parse(data).students);
  });
};

//根据ID查找学生
exports.findById = function(id, callback){
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if(err){
            return callback(err);
        }

        var students = JSON.parse(data).students;

        var stu = students.find(function (item) {
            return item.id === parseInt(id);
        });

        callback(null, stu);
    });
};

//添加学生
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if(err){
            return callback(err);
        }

        var students = JSON.parse(data).students;

        //添加ID
        student.id = students[students.length - 1].id + 1;

        students.push(student);

        //把对象数据转为字符串
        var fileData = JSON.stringify({
            students : students
        });

        //将数据保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if(err){
                return callback(err);
            }
            callback(null);
        });
    });
};

//修改学生
exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if(err){
            return callback(err);
        }
        
        var students = JSON.parse(data).students;
        
        student.id = parseInt(student.id);
        
        //找到要修改哪个学生
        var stu = students.find(function (item) {
            return item.id === student.id;
        });

        //进行修改
        for(var key in student){
            stu[key] = student[key];
        }

        //把对象数据转为字符串
        var fileData = JSON.stringify({
            students : students
        });

        fs.writeFile(dbPath, fileData, function (err) {
            if(err){
                callback(err);
            }
            callback(null);
        });
    });
};

//删除学生
exports.delete = function (id, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
       if(err){
           return callback(err);
       }

       var students = JSON.parse(data).students;

       var deleteId = students.findIndex(function (item) {
           return item.id === parseInt(id);
       });

       students.splice(deleteId, 1);

       var fileData = JSON.stringify({
           students : students
       });

       fs.writeFile(dbPath, fileData, function (err) {
           if(err){
               return callback(err);
           }
           callback(null);
       });
    });
};