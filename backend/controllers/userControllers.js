const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const {generateToken} = require('../config/generateToken');



const registerUser=asyncHandler(async (req,res)=>{

    const {name,email,password,pic}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({msg:"Please enter all the fields"});
    }
    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({msg:"User already exists"});
    }
    const newUser=await User.create({name,email,password,pic});
        if(newUser){
            res.status(201).json({
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                pic:newUser.pic,
                token:generateToken(newUser._id),

            });

        }
        else{
            res.status(400).json({msg:"User not created"});
        }

}
);

const authUser = asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({msg:"Please enter all the fields"});
    }
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).json({msg:"User does not exist"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({msg:"Invalid credentials"});
    }
    res.status(200).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        pic:user.pic,
        token:generateToken(user._id),
    });
}
);

   

module.exports={registerUser,authUser};
