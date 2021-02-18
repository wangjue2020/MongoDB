var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_test");
mongoose.connection.once("open",function(){
    console.log("connections build");
})
//将mongoose.Schema赋值给一个变量
var schema = mongoose.Schema;
//创建Schema（模式）对象
var studentSchema = new schema({
    name:String,
    age:Number,
    address:String,
    gender:{
        type:String,
        default:"female"
    }
});

//通过Schema来创建Model
//Model代表的是数据库中的集合，通过Model才能对数据库进行操作
//mongoose.model(modelName, schema);
//modelName 就是要映射的集合名, mongoose 会自动将集合名变成复数，如果已经是复数就不会变了
var studentModel = mongoose.model("student", studentSchema);
//向数据库中插入一个文档
//studentModel.create(doc, function(err){})
studentModel.create({
    name:"user1",
    age:12,
    address:"Toronto"
}, function(err){
    if(!err){
        console.log("insert successfully");
    }
})