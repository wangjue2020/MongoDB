/*
Document 和集合中的文档一一对应，Document是Model的实例，
        通过Model查询到的结果都是Document
*/
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_test");
mongoose.connection.once("open", function(err){
    if(!err){
        console.log("connection build");
    }
});

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

var StudentModel = mongoose.model("students", studentSchema);


//创建一个Document
var student = new StudentModel({
    name:"user6",
    age:09,
    gender:"Male",
    address:"Peking"
});

// console.log(student);
/*
document 的方法
    Model#save([options],[fn])
*/
// student.save(function(err){
//     if(!err){
//         console.log("save to db successfully");
//     }else{
//         console.log(err.message);
//     }
// });

StudentModel.findOne({}, function(err,doc){
    if(!err){
        /*
        update(update, [options], [callback]);
            --修改对象
        */
       //方法一
    //    doc.update({$set:{name:"firstUser"}},function(err){//本身就是文档的method，所以不需要再设置查询条件了
    //        if(!err){
    //            console.log("update successfully");
    //        }else{
    //            console.log(err.message);
    //        }
    //    });
       //方法二：
    //    doc.age=30;
    //    doc.save();
       /*
       删除当前文档
       remove([callback]);
       */
    //    doc.remove(function(err){
    //        if(!err){
    //            console.log("document removed successfully");
    //        }
    //    });

       /*类似于java里面的getter和setter
        get(name)  
            -- 获取文档中的指定属性值
        set(name, value)
            -- 设置文档的指定的属性
        toJSON()
            -- 转换为一个JSON对象
        toObject()
            -- 将Document对象转换为一个普通的JS对象
                转换为普通的js对象以后，注意所有的Document对象的方法或属性都不能使用了！！！！
       */
      doc.set("age", doc.get("age")+10);
      doc.save();
        console.log(doc.toObject());

    }
});
