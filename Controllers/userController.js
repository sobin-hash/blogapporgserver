// const mongoose = require('mongoose')
const users = require('../Models/userSchema')
const admins = require ('../Models/adminSchema')

const jwt = require('jsonwebtoken')
// const { use } = require('../Routes/route')


exports.userRegisterController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const existingUser = await users.findOne({ email, password }) //email:emailvalue,password:passwordvalue 
        if (existingUser) {
            res.status(406).json("Already existing user....!")
        } else {
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)

    }


}



exports.userLoginController = async (req,res) => {
    console.log("Inside login")
    console.log(req.body)
    const { email,password } = req.body
    try {

        
        const existingAdmin = await admins.findOne({email,password})
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRETKEY)
            res.status(200).json({ token, existingUser,role:"user" })
        } else {
            if(existingAdmin){
                const token = jwt.sign({ userId: existingAdmin._id }, process.env.JWT_SECRETKEY)
                res.status(200).json({ token, existingAdmin,role:"admin" })


            }else{
                 
                res.status(401).json("Invalid username or password")


            }
        }
    } catch (err) {
        res.status(401).json(err)

        }
    
}


exports.getAllUser = async(req,res)=>{
    try {
        
        const userslist = await users.find() 
        
        res.status(200).json(userslist)
        
    } catch (err) {
        res.status(401).json(err)

    }

}

exports.removeUser = async(req,res)=>{
    const userId=req.params.id
    try {
        
        console.log(userId)

        
        const delusers = await users.findOneAndDelete({_id:userId}) 
        
        res.status(200).json(delusers)
        console.log("deal delete done")
        
    } catch (err) {
        res.status(401).json(err)

    }

}








// }