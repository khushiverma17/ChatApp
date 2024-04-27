const express=require("express");
const {
    loginController, 
    registerController,
    fetchAllUsersController
    }=require("../Controllers/userController");

    //protect is the name of the object of the middleware
const { protect }=require("../middleware/authMiddleware");
const Router=express.Router();



Router.post("/login", loginController);
Router.post("/register", registerController);
// here protect means only authorised user can access the route /fetchUsers
// so a authentication middleware called protect is given here to this route
// if i want access to the fetchUsers route, I need to be logged in means i should have the bearer token
Router.get("/fetchUsers",protect,fetchAllUsersController);

module.exports=Router;