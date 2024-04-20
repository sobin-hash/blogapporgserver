const blogs = require('../Models/blogSchema')
// require('../Middleware/jwtMiddleware')


exports.createPostController=async(req,res)=>{
    const {posttitle,posttext}=req.body
    const image = req.file.filename
    const userId = req.payload
    try{
      
        const newBlog = new blogs({posttitle,posttext,userId,image})
            await newBlog.save()
            res.status(201).json(newBlog)
    }catch(err){
        res.status(401).json(err)
    }

}


exports.editPostController=async(req,res)=>{
    const {posttitle,posttext}=req.body
    const image = req.file.filename
    
    const userId = req.payload
    const blogId = req.params.id
    try{
    
        const result = await blogs.findOneAndUpdate({_id:blogId},{posttitle,posttext,image,userId})
        
        res.status(201).json(result)
    }catch(err){
        res.status(401).json(err)
    }

}

exports.deleteBlogController=async(req,res)=>{
    
    const blogId = req.params.id
    try{
    
        const result = await blogs.findOneAndDelete({_id:blogId})
        
        res.status(201).json(result)
    }catch(err){
        res.status(401).json(err)
    }

}

exports.deleteAllBlogsController=async(req,res)=>{
    
    const userId = req.params.id
    try{
    
        const result = await blogs.deleteMany({userId})
        
        res.status(201).json(result)
    }catch(err){
        res.status(401).json(err)
    }

}

exports.getAllBlogsController = async(req,res)=>{
    try{
        const result = await blogs.find()  //to fetch all data from mongodb
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)

    }
}



exports.getUserSpecificBlogController = async(req,res)=>{
    try{
        const userId = req.params.id
        const result = await blogs.find({userId})  //to fetch all data from mongodb
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)

    }
}

exports.getSpecificBlogHome = async(req,res)=>{
    try{
        const blogId = req.params.id
        const result = await blogs.find({_id:blogId})  
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)

    }
}

exports.getUserBasedBlogs = async(req,res)=>{
    try{
        const userId = req.payload
        const result = await blogs.find({userId})
        res.status(200).json(result)

    }catch(err){
        res.status(401).json(err)


    }
}


exports.addComment = async(req,res)=>{
    try{
        const {comment,username}=req.body
        // const userId = req.payload
        const blogId = req.params.id
        const result = await blogs.updateOne(
            {_id:blogId},{$push : {comments:{comment,username}}}
        )

    }catch(err){
        res.status(401).json(err)
    }
}