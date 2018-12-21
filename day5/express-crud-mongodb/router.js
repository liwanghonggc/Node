var fs = require('fs');
var express = require('express');
var Student = require('./student');

//1.创建一个路由容器
var router = express.Router();

//2.将路由都挂载到路由容器中

//2.1 显示学生列表,get方式,无参数
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if(err){
            return res.status(500).send('Server error!');
        }
        res.render('index.html', {
            students : students
        });
    });
});

//2.2 跳转至添加学生页面,get方式,无参数
router.get('/students/new', function (req, res) {
    res.render('new.html');
});

//2.3 添加学生,post方式,有参数,学生信息
router.post('/students/new', function (req, res) {
    new Student(req.body).save(function (err) {
       if(err){
           return res.status(500).send('Server error!');
       }
       res.redirect('/students');
    });
});

//2.4 跳转至修改学生页面,get方式,有参数,学生ID
router.get('/students/edit', function (req, res) {
    Student.findById(req.query.id.replace(/"/g, ''), function (err, student) {
        if(err){
            return res.status(500).send('Server error!');
        }
        res.render('edit.html', {
            student : student
        });
    });
});

//2.5 修改学生,post方式,有参数,学生信息
router.post('/students/edit', function (req, res) {
    var id = req.body.id.replace(/"/g, '');
    Student.findByIdAndUpdate(id, req.body, function (err) {
        if(err){
            return res.status(500).send('Server error!');
        }
        res.redirect('/students');
    });
});

//2.6 删除学生,get方式,有参数,学生ID
router.get('/students/delete', function (req, res) {
    var id = req.query.id.replace(/"/g, '');
    Student.findByIdAndRemove(id, function (err) {
        if(err){
            return res.status(500).send('Server error!');
        }
        res.redirect('/students');
    })
});

//3.导出
module.exports = router;
