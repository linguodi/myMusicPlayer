var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/movieServer", { useNewUrlParser: true },function(err){
    if (err) {

        console.log('Connection Error:' + err)

    } else {

        console.log('Connection success!')
    }
})
module.exports = mongoose