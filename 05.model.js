var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_test");
mongoose.connection.once("open", function(){
    console.log("connection build");
})
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"Female"
    },
    address: String
});

var studentModel = mongoose.model("students", studentSchema);
/*
    有了Model，我们就可以对数据库进行增删改查的操作

    Model.create(doc(s), [callback])
    --用来创建一个或多个文档并添加到数据库中
    --参数：
        doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
*/

studentModel.create([
    {
        name:"user4",
        age:14,
        gender:"Male"
    },
    {
        name:"user5",
        age:18,
        address:"changesha"
    }
],function(err){
    if(!err){
        console.log("insert successfully");
    }else{
        console.log(err.message);
    }
});

/*
查询

Model.find(conditions, [projection], [options], [callback]);
    --查询所有符合条件的文档,总会返回的数组
Model.findById(id, [projection], [options],[callback]);
    --根据文档的id属性查询文档,
Model.findOne([conditions], [projection], [options], [callback]);
    --查询符合条件的第一个文档,返回的是对象，不是数组

参数：
conditions： 查询的条件对象
projection ：投影，需要显示的字段
options： 查询选项（skip limit）
callback： 回调函数，查询结果会通过回调函数返回，回调函数必须传，如果不传回调函数，就不会进行查询
*/
studentModel.find({gender:"Male"},function(err, docs){
    if(!err){
        console.log(docs);
    }else{
        console.log(err.message);
    }
});

studentModel.find({},{name:1, _id:0},function(err, docs){//要name， 不要_id
    if(!err){
        console.log(docs);
    }else{
        console.log(err.message);
    }
});

studentModel.find({},"name gender address -_id", {skip:1, limit:1}, function(err, docs){//也可以用String表示，加个“-”表示不要这个字段，不加表示要显示这个字段
    if(!err){
        console.log(docs);
    }else{
        console.log(err.message);
    }
});

studentModel.findOne({},{name:1, _id:0},function(err, docs){//要name， 不要_id
    if(!err){
        console.log(docs);
    }else{
        console.log(err.message);
    }
});
studentModel.findById("602ed8cea6a38d625ce8a56a", function(err, doc){
    if(err){
        //通过find()查询的结果，返回的对象，就是Document，文档对象
        //Document对象是Model的实例，用的是那个model，就是哪个model的实例
        console.log(err.message);
    }else{
        console.log(doc);
    }
});
/*
修改

Model.update(conditions,doc, [options], [callback]);
Model.updateMany(conditions, docs, [options], [callback]);
Model.updateOne(conditions, doc, [options], [callback]);

--用来修改一个或多个文档
--参数：
    conditions 查询条件
    doc 修改后的对象
    options 配置参数
    callback 回调函数

Model.replaceOne(conditions, doc, [options], [callback]);
替换一个对象
*/
studentModel.updateOne({name:"user1"}, {$set:{age:20}},function(err){
    if(!err){
        console.log("update successfully");
    }
});

/*
删除

Model.remove(conditions,[callback]);
Model.deleteOne(conditions,[callback]);
Model.deleteMany(conditions,[callback]);
*/

studentModel.deleteMany({name:"user4"},function(err){
    if(!err){
        console.log("delete successfully");
    }
})

/*
Model.count(conditions,[callback]);
*/
studentModel.count({},function(err,count){
    if(!err){
        console.log(count);
    }else{
        console.log(err.message);
    }
})