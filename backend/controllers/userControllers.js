const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const {generateToken} = require('../config/generateToken');



  const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, confirmPassword} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({
            message: 'Please fill all the fields'
        });
    }
    
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({
            message: 'User already exists'
        });
    }
   
     const newUser = await User.create({name, email, password});
       if(newUser){
          res.status(201).json({
               _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token:generateToken(newUser._id)
          });
        }
        else{
            res.status(400);
            throw new Error('User not created');
        }
    });
 

    const authUser = asyncHandler(async (req, res) => {
          const {email, password} = req.body;
            if(!email || !password){
                return res.status(400).json({
                    message: 'Please fill all the fields'
                });
            }
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({
                    message: 'User does not exist'
                });

            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({
                    message: 'Invalid credentials'
                });
            }
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        });

module.exports={registerUser, authUser};
