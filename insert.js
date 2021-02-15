/*
向数据库中插入数据
db.<collection>.insert()   --- 向集合中插入一个或多个文档

当我们向集合中插入文档时，如果没有给文档指定_id的属性，则数据库会自动为文档添加_id 属性，该属性来作为文档的唯一标时
_id 的属性，我们可以自己指定，如果有指定的话，数据库就不会自己生存，如果自己指定的话，也一定要确保_id属性的唯一性

*/
db.student_info.insert({name:"Lucy",age:28, gender:"M"});
db.student_info.insert([
    {name:"Jeeny", age:18, gender:"F"},
    {name:"John", age:21, gender:"M"}
]);
db.student_info.insertOne({name:"Jason", age:90, gender:"M"});
db.student_info.insertMany([
    {name:"Jacky", age:12, gender:"M"},
    {name:"Jim",age:14, gender:"F"}
]);
db.student_info.find({})