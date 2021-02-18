//引入
var mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://localhost/local");
mongoose.connection.once("open", function(){
    console.log("connects successfully");
});

mongoose.connection.once("close", function(){
    console.log("disconnect successfully");
});

mongoose.disconnect();