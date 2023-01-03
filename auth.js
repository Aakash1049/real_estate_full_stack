const jwt = require("jsonwebtoken")
const User = require("./models/User")
exports.isAuthenticated = async function(req,res,next){
   try {
    const {authorization}= req.headers
    if(!authorization || authorization=="Bearer null"){
        // console.log("here")
        return res.status(401).json({
            error:"Please login first"
        })
    }
    let token=authorization.replace("Bearer ","")
    const decoded= jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded._id)
    next()
   } catch (error){

    res.status(500).json({
        error:error.message
    })
   }
}