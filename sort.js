//查询文档时，默认情况按照_id的值进行排序（升序）
//sort()可以用来指定文档的排序规则，sort()需要传递一个对象来指定排序规则， 1表示升序，-1表示降序
//limit skip sort可以以任意顺序进行调用
db.student_info.find({}).sort({age:1});
db.student_info.find({}).sort({age:-1});
//在查询时，可以用第二个参数来设置查询结果的投影
db.student_info.find({},{name:1,age:-1,gender:1});
