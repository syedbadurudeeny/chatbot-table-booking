const asyncHandler= require('express-async-handler');
const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userRegistration = asyncHandler (async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All Fields Are Not Empty");
    }
    
    const user = await User.findOne({email})

    if(user){
        res.status(400);
        throw new Error("User Already Exists")
    };

    const hashPassword = await bcrypt.hash(password,10);
    console.log(hashPassword)

    const createUser = await User.create({
        username,
        email,
        password:hashPassword
    });

    if(createUser){
        console.log(createUser)
        res.status(200).json({message : "User Created"});
    }

    res.status(400).json({message : "There is an error"})
})

const userLogin = asyncHandler( async (req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("All Fields Are Not Empty");
    }

    const user = await User.findOne({email});

    if(user && (bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user : {
                _id: user.id,
                email: user.email,
                password: user.password
            }
        }, process.env.ACCESS_TOKEN_SECRET , {expiresIn : "15m"})

        console.log(user)
        res.status(200).json({accessToken});
        console.log({accessToken})
    }

    res.status(404).json({message : "Check Your Credential"});
});

module.exports = {userRegistration,userLogin};
