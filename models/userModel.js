const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const userModel=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

},
{
    timeStamp:true,
}
);

userModel.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userModel.pre("save",async function(next){
    if(this.isModified("password")){
        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password, salt);
    }
    next();
    // salt is a factor in bcrypt that dictates how much encryption should be in the password (directly proportional)
});
    // userModel.pre("save", async function(next) {
    //     if (this.isModified("password")) {
    //         const salt = await bcrypt.genSalt(10);
    //         this.password = await bcrypt.hash(this.password, salt);
    //     }
    //     next();
    // });



const User=mongoose.model("User",userModel);
module.exports=User;