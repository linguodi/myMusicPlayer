var mongoose = require("../common/db")
// 创建数据库解构
var user = new mongoose.Schema({
    username:String,
    password:String,
    userMail:String,
    userAdmin:Boolean,
    userPhone:String,
    userPower:Number,
    userStop:Boolean
})
//封装数据筛选方式
// 找到所有的数据
user.statics.findAll = function(callBack){
    this.find({},callBack)
}
// 按照用户名查找用户
user.statics.findUsername = function (name,callBack){
    this.find({username:name}, callBack)
}
// 登录匹配看是否拥有相同的用户名和密码，并且没有处于封停的状态
user.statics.findUserLogin = function (name, password,callBack){
    this.find({ username: name, password: password,userStop:false}, callBack)
}
// 验证邮箱，用户名，电话找到相应的用户信息
user.statics.findUserPassword = function (name, mail, phone, callBack){
    this.find({ username: name, userMail: mail, userPhone: phone }, callBack)
}
// 验证接口
// user.statics.findOne = function(id){

// }
//将user.js暴露出去
var userModel = mongoose.model('user',user)
module.exports = userModel