/*
定义一个模块，用来连接MongoDB数据库
*/

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_test");
mongoose.connection.once("open", function(){
    console.log("connection build");
})