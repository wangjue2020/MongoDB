/*
查询

    db.<collection>.find();
    --find() 用来查询所有符合条件的文档
    --find() 可以接受一个对象作为条件参数
        {} 表示查询集合中所有的文档
        {gender:"F"} 表示查询集合中所有genger为F的文档
        {字段名：value} 表示查询集合中所有指定字段的值为value的文档
    --find() 返回的是一个数组，因为查询的是所有符合条件的document   
    
    db.<collection>.findOne();
    --findOne() 用来查询集合中符合条件的第一个文档 
    返回的是一个文档
    
    db.student_info.find().count();
    -- 查询所得结果的数量
    
*/

db.student_info.find({gender:"F"});
db.student_info.find({gender:"F", age:18});


db.student_info.findOne({gender:"F"});
db.student_info.findOne({gender:"F"}).name;

db.student_info.find().count();