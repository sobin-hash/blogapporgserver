const Mongoose = require("mongoose")

const adminSchema = new Mongoose.Schema({
    username:{
        type:String,
        required:true

    },

    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true

    }

})
const admins = Mongoose.model('admins',adminSchema)
module.exports=admins

