const express=require("express");
const {
    loginController, 
    registerController,
    fetchAllUsersController
    }=require("../Controllers/userControllers");

const {verifyController} = require ("../Controllers/verifyController")

    //protect is the name of the object of the middleware
const { protect }=require("../middleware/authmiddleware");
const Router=express.Router();



Router.post("/login", loginController);
Router.post("/register", registerController);
// here protect means only authorised user can access the route /fetchUsers
// if i want access to the fetchUsers route, I need to be logged in means i should have the bearer token
Router.get("/fetchUsers",protect,fetchAllUsersController);
// Router.get("/fetchGroups", protect, )
Router.get("/:id/verify/:token", verifyController)



module.exports=Router;