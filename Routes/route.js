const express = require('express')
const userController = require('../Controllers/userController')
const blogController = require('../Controllers/blogController')
const jwtMiddleWare = require('../Middleware/jwtMiddleware')
const multerconfig = require('../Middleware/multerMiddleware')

// const adminMiddleWare = require('../Middleware/adminMiddleware')

const router = express.Router() //router instance from express

router.post('/register-user',userController.userRegisterController)
router.post('/login',userController.userLoginController)
// router.post('/login-admin',userController.adminLoginController)

router.post('/postblog',jwtMiddleWare,multerconfig.single('image'),blogController.createPostController)




router.post('/editblog/:id',jwtMiddleWare,multerconfig.single('image'),blogController.editPostController)
router.put('/editprofile',jwtMiddleWare,multerconfig.single('image'),userController.userProfileController)
router.post('/addcomment/:id',jwtMiddleWare,blogController.addComment)
router.get('/getallblogs',jwtMiddleWare,blogController.getAllBlogsController)
router.get('/getspecificblog/:id',jwtMiddleWare,blogController.getSpecificBlogHome)
router.get('/getuserblogs',jwtMiddleWare,blogController.getUserBasedBlogs)
router.delete('/removeblog/:id',jwtMiddleWare,blogController.deleteBlogController)
router.delete('/removeallblog/:id',jwtMiddleWare,blogController.deleteAllBlogsController)

router.get('/getuserprofile',jwtMiddleWare,userController.getUserProfile)



// admin 
router.get('/getallusers',jwtMiddleWare,userController.getAllUser)
router.get('/getuserblogs/:id',jwtMiddleWare,blogController.getUserSpecificBlogController)
router.delete('/removeuser/:id',jwtMiddleWare,userController.removeUser)




module.exports=router