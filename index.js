require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./Routes/route')
// const jwtMiddleWare = require('./Middleware/jwtMiddleware')

require('./connection/db')

const userBlog = express()
userBlog.use(cors())
userBlog.use(express.json())
// userBlog.use(jwtMiddleWare)
userBlog.use('/upload',express.static("./uploads"))

userBlog.use(route)

const PORT = 3000 || process.env.PORT

userBlog.listen(PORT,()=>{

    console.log(`Blog server started at : ${PORT}`)
})

userBlog.get('/',(req,res)=>{
    res.send("<h1>Daily blog started ..waiting for client request </h1>")
})