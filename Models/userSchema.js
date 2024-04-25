const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true

    },
    fullname:{
        type:String
    },
    profileImage:{
        type:String

    }
    

})

const users = mongoose.model('users',userSchema) //users inside the braces is /will be the collection name in mongodb
module.exports  = users