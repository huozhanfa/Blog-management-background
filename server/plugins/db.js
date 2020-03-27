module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/react_node',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    })
    console.log("成功连接数据库！");
}