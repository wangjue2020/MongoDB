//1. 进入my_test数据库
use my_test;
//2. 向数据库的user集合插入一个文档
db.user.insert({username:"lucy"});
show databases;
show collections;

//3. 查询user集合中的文档
db.user.find({});
//4. 向数据库的user集合插入一个文档
 db.user.insert({
     username:"Jenny"
 });
//5. 查询user集合中的文档
db.user.find({});
//6. 统计数据库user集合中的文档数量
db.user.find({}).count();
//7. 查询数据库user集合中username为：lucy的文档
db.user.find({username:"lucy"});
//8. 向数据库user集合中username为lucy的文档添加一个address属性，值为Toronto
db.user.update(
    {username:"lucy"},
    {$set:{address:"toronto"}}
);
//9. 使用{username:"John"} 替换username 为Jenny的文档
db.user.replaceOne({username:"Jenny"},{username:"John"});
//10. 删除username为lucy的文档中的address属性
db.user.update(
    {username:"lucy"},
    {$unset:{address:1}}
);
//11. 向username为lucy的文档中，添加一个hobby：{cities:["beijing","shanghai","shenzhen"], movie:["harry potter", "twilight"]}
//Mongodb 的属性值也可以是一个文档，如这里的hobby对应的就是一个文档，有cities，movies多个属性
db.user.update(
    {username:"lucy"},
    {$set:{hobby:{cities:["beijing","shanghai","shenzhen"], movie:["twilight", "harry potter"]}}}
);
//12. 向username等于john的文档中， 添加一个hobby:{movie:["A Chinese Odyssey", "King of Comedy"]}
db.user.update(
    {username:"John"},
    {$set:{hobby:{movie:["A Chinese Odyssey", "King of Comedy"]}}}
);
db.user.find({})

//13. 查询喜欢电影King of Comedy 的文档
//MongoDB支持直接通过内嵌文档的属性进行查询，如果需要查询内嵌文档，则可以通过“."的方式来访问内嵌文档的属性
//如果要通过内嵌文档对文档进行查询，则属性名必须用引号
db.user.find({"hobby.movie":"King of Comedy"});

//14. 向John中添加一个新的电影Twilight
//$set会直接覆盖设置指定的属性，而这里movie是一个array，我们要做的是添加而不是覆盖
//根据array 的operator， 可以用$push
//$push    用于添加， push不考虑数组中是否已经存在相同的value，会直接添加
//$addToSet    向数组添加一个新元素， set作为集合来说，是不允许重复的，要保证单一性，所以addToSet对于已经存在的value，再添加的时候就无法重复添加，不会出错但也不会modify
//$pop    用于删除

db.user.update(
    {username:"John"},
    {$push:{"hobby.movie":"twilight"}}
);
//15. 删除喜欢beijing的用户
db.user.deleteMany({"hobby.cities":"beijing"});
//16. 删除user集合
db.user.drop();

//17. 向numbers插入1000条数据
//方法一：添加1000次
for(var i  =1 ; i <= 1000;i++){
    db.numbers.insert({number:i});
};
//方法二：先放到数组里，再统一添加， 效率更高
var arr =[]
for(var i = 1001; i<=2000; i++){
    arr.push({number:i});
}
db.numbers.insert(arr);
db.numbers.find();

//18. 查询numbers 中number为500 的文档
db.numbers.find({number:500});

//19. 查询numbers 中number大于500的文档
db.numbers.find({number:{$gt:50}});

//20. 查询numbers 中number小于30的文档
db.numbers.find({number:{$lt:30}});

//21. 查询numbers 中number小于40大于30的文档
db.numbers.find({number:{$lt:40,$gt:30}});

//22. 查询numbers中前10条数据
//limit() 设置显示数据的上限
db.numbers.find().limit(10);
//23. 查询numbers中的第21到30条数据
//skip() 用于跳过指定数量的文档
db.numbers.find({}).skip(20).limit(10);
show collections;