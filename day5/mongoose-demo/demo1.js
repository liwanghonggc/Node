var mongoose = require('mongoose');

//连接MongoDB数据库
mongoose.connect('mongodb://localhost/test');

mongoose.Promise = global.Promise;

//这里会创建一个(类似于MySQL)cats表,MongoDB里称为集合
//一个数据库可以有多个集合(数据库),一个集合有多个文档(表记录)
var Cat = mongoose.model('Cat', { name: String });

for (var i = 0; i < 10; i++) {
  // 实例化一个 Cat
  var kitty = new Cat({ name: '喵喵' + i });

  // 持久化保存 kitty 实例
  kitty.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });
}

//保存数据到数据库之后
//1) 使用use test切换到test数据库
//2) show collections可以查看有哪些集合(表),这里有cats
//3) db.cats.find()