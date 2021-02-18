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