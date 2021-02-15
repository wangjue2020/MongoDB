/*
删除

    db.<collection>.remove()
        -- 删除一个或所有符合条件的文档，默认情况下删除所有，如需只删除一个符合条件的文档，可以添加第二个参数true，指明justOne=true
            db.<collection>.remove({查询条件}, true);
        -- 如果值传递一个空对象，则会删除集合中所有的文档
    
    db.<collection>.deleteOne()
    
    db.<collection>.deleteMany()
    
    db.<collection>.drop() 
        -- 删除集合
    db.dropDatabase()
        -- 删除数据库
    -- 当数据库只有一个集合，且这个集合被删除时，所在的数据库也会被删除
    
 */
 
 db.student_info.find({});
 db.student_info.remove({age:30});
 db.student_info.insert({name:"name_18"});
 //只删除一个
 db.student_info.remove({name:"name_18"},true);
 //删除所有
 db.student_info.remove({name:"name_18"});
 //清空集合(性能较差，可以选择直接删除这个集合）
 db.student_info.remove({}); //集合还存在，但是里面没有文档 
 //删除这个集合，集合不存在
 db.student_info.drop();