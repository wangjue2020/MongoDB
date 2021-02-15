/*

修改

    db.<collection>.update(查询条件，新对象)
    -- update() 默认情况下会用新对象直接覆盖取代旧的对象
    -- 如果需要修改指定的字段，而不是替换则需要使用“修改操作符”来完成修改
        $set 可以用来修改或添加文档中的指定字段
        $unset 可以用来删除文档中的指定字段
    -- update() 默认只会修改所有符合条件的文档中的一个文档, 如果需要用update() 方法同时给所有符合条件的的文档进行修改的话，则用第三个参数对象来指定允许多个document更新
        db.<collection>.update({查询对象},{$set:{修改内容}}, {multi: true});
        
    db.<collection>.updateMany()
        -- 同时修改多个符合条件的文档
     
    db.<collection>.updateOne()
        -- 修改一个符合条件的文档
        
    db.<collection>.replaceOne()
        -- 用于替换一个文档
    
 */
 
 db.student_info.find({});
 //覆盖替换
 db.student_info.update({name:"Lucy"},{age:30});
 
 //使用$set 进行指定属性更新
 db.student_info.update({name:"Lucy"},{$set:{age:30}});
 db.student_info.updateOne({age:18}, 
     {$set:{
      name:"name_18",
      gender:"M"   
         }
     });
 db.student_info.update({},{$set:{gender:"F"}},{multi:true});  
 //使用$unset 进行删除指定属性，和set用法一样，但是对于指定属性给予的值不重要，不管写的值是多少都不会被采用，因为是在做删除属性操作
 db.student_info.updateMany({gender:"M"},
     {$unset:{gender:1}}
 );