const express=require("express");
const UserModel=require("../models/userModel")
const expressAsyncHandler=require("express-async-handler");
//Login
const generateToken = require("../Config/generateToken");

const loginController=expressAsyncHandler(async(req, res)=>{
    console.log(req.body);
    const {name, password}=req.body;

    const user=await UserModel.findOne({name})

    console.log("Fetched user data",user);
    console.log(await user.matchPassword(password));

    if(user && (await user.matchPassword(password)))
    {
        const response={
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        };
        console.log(response);
        res.json(response);
    }
    else
    {
        res.status(401);
        throw new Error("Invalid Username of Password");
    }


});


const registerController=expressAsyncHandler( async(req,res)=>{
    const {name, email, password}=req.body;
    
    //check for all fields
    if(!name || !email || !password)
    {
        res.send(400);
        throw Error("All necessary input fields have not been filled");
    }
    
    //preexisting user mail
    const userExist=await UserModel.findOne({email});
    if(userExist){
        throw new Error("User already exists")
    }
    
    //preexisting user name
    const userNameExist=await UserModel.findOne({name});
    if(userNameExist){
        throw new Error("UserName already taken")
    }
    
    
    //create an entry in database
    const user= await UserModel.create({name, email, password});
    if(user)
    {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }
    else
    {
        res.status(400);
        throw new Error("Registration Error")
    }
    
});

//it fetches all the users that are currently registered except the current user
const fetchAllUsersController=expressAsyncHandler(async(req,res)=>{
    // This line checks if there is a search query parameter (search) in the request. If it exists, it constructs a MongoDB query object (keyword) to search for users based on their name or email using a regular expression ($regex). If the search query parameter doesn't exist, it sets keyword to an empty object.
    const keyword=req.query.search
    ? {
        $or: [
            { name: {$regex: req.query.search, $options: "i"}},
            { email: {$regex: req.query.search, $options: "i"}},
        ],
    }
    :{};
    const users=await UserModel.find(keyword).find({
        _id: {$ne: req.user._id},
    });
    res.send(users);
});


module.exports ={loginController,registerController,fetchAllUsersController};
