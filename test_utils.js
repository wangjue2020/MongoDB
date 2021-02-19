require("./utils/mongodb_connect");
var StudentModel = require("./models/students");

StudentModel.find({},function(err, docs){
    if(!err){
        console.log(docs);
    }else{
        console.log(err.message);
    }
})