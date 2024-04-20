const Mongoose = require("mongoose")

const blogSchema = new Mongoose.Schema({

    posttitle:{
        type:String,
        required:true

    },
    posttext:{
        type:String,
        required:true

    },
    
    image:{
        type:String,
        required:true

    },
    comments:[
        
        
    ],
  
    userId:{
        type:String,
        required:true


    }
    


})

const blogs = Mongoose.model('blogs',blogSchema)
module.exports=blogs

