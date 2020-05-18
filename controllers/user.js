const User = require('../models/user')


exports.userById = ( req, res, next, id ) =>{
    User.findOne(id).exec((err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error:"user not found"
            })
        }
        req.profile=user
        next()
    })
}
