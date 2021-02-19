var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default: "Female"
    },
    address:String
});

var StudentModel = mongoose.model("students", studentSchema);

// exports.model=StudentModel;  之后用require("student").model 获取

module.exports = StudentModel; // 之后用require("student") 获取