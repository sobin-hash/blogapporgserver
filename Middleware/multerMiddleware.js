//import multer
const multer= require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')

    },
    filename:(req,file,callback)=>{
        const filename = `Image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

const filefilter = (req,res,callback)=>{
    if (file.mimetype==="image/png" || file.mimetype ==="image/jpeg"){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("Only .png .jpg .jpeg files are allowed!!"))
    }

}

const multerconfig  = multer({
    storage,
    filefilter
})

module.exports=multerconfig