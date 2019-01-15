// // 连接数据库测试
// var express = require("express")
// var router = express.Router()
// var mongoose = require("mongoose")
// router.get("/",function(req,res,next){
// res.render("index",{title:"Express"})
// })
// // 定义路由
// router.get("/mongooseText",function(req,res,next){
//   mongoose.connect("mongodb://127.0.0.1/pets", { useNewUrlParser: true },function(err){
//     if (err) {

//       console.log('Connection Error:' + err)

//     } else {

//       console.log('Connection success!')
//     }
//   })
//   mongoose.Promise = global.Promise
//   var Cat = mongoose.model("Cat",{name:String})
//   var lin = new Cat({name:"lin"})
//   lin.save(function(err){
//     if(err){
//       console.log("err")
//     }else{
//       console.log("success insert")
//     }
    
//   })
//   res.send("数据库连接成功")
// })
// module.exports = router;
