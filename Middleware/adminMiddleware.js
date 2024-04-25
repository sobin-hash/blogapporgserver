// const jwt=require('jsonwebtoken')

// const adminMiddleWare=(req,res,next)=>{
//     console.log("Inside jwtMiddleWare");
//     try{
//         const token=req.headers.authorization.split(" ")[1]  //token from request header (Bearer [token] )
//         console.log(token);
//         if(token){
//             const jwtResponse=jwt.verify(token,process.env.JWT_ADMINKEY)
//             console.log(jwtResponse,"response")
//             req.payload=jwtResponse.userId  //asign userId from token as payload
//             next()
//         }else{
//             res.status(406).json("token not available")
//         }
        
//     }catch(err){
//         console.log(err)
//         res.status(401).json("Authorization failed...please login..")
//     }

// }

// module.exports=adminMiddleWare