const expressAsyncHandler = require("express-async-handler");
const UserModel=require("../models/userModel")
const verificationTokenModel = require("../models/verificationTokenModel");
const generateToken = require("../Config/generateToken");

const verifyController = expressAsyncHandler(async (req, res) => {

    try{
        const user = await UserModel.findOne({
            _id: req.params.id
        })
        if(!user){
            return res.status(400).send({message: "Invalid link because of no user"})
        }

        const verificationtoken = await verificationTokenModel.findOne({
            userId: user._id,
            tokenVerify: req.params.token
        })
        console.log("Token:", verificationtoken); 
        if(!verificationtoken){
            return res.status(400).send({message: "Invalid link no token"})
        }

        await UserModel.updateOne(
            {_id: user._id},
            {$set: {verified: true}}
        )

        const resuser = await UserModel.findById(user._id)


        await verificationTokenModel.deleteOne({ _id: verificationtoken._id });

        

        res.status(200).send({message: "Your Email verified successfully", resuser:{
            _id: resuser._id,
            name: resuser.name,
            email: resuser.email,
            jwttoken: resuser.jwttoken,
            token : verificationtoken.tokenVerify
        }})


    }catch(error){
        console.error("Error:", error);
        res.status(500).send({message: "Internal server error",})
    }

})

module.exports={verifyController}


// const expressAsyncHandler = require("express-async-handler");
// const UserModel = require("../models/userModel");
// const verificationTokenModel = require("../models/verificationTokenModel");
// const generateToken = require("../Config/generateToken");

// const verifyController = expressAsyncHandler(async (req, res) => {
//   try {
//     const user = await UserModel.findOne({
//       _id: req.params.id
//     });
//     if (!user) {
//       return res.status(400).send({ message: "Invalid link because of no user" });
//     }

//     const verificationtoken = await verificationTokenModel.findOne({
//       userId: user._id,
//       tokenVerify: req.params.token
//     });
//     console.log("Token:", verificationtoken);
//     if (!verificationtoken) {
//       return res.status(400).send({ message: "Invalid link no token" });
//     }

//     await UserModel.updateOne(
//       { _id: user._id },
//       { $set: { verified: true } }
//     );

//     const resuser = await UserModel.findById(user._id);

//     await verificationTokenModel.deleteOne({ _id: verificationtoken._id });

//     // Generate JWT token and send it in the response headers
//     const token = generateToken(resuser._id);
//     res.set("Authorization", `Bearer ${token}`);

//     res.status(200).send({ message: "Your Email verified successfully", resuser: {
//       _id: resuser._id,
//       name: resuser.name,
//       email: resuser.email
//     } });


//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }

// });

// module.exports = { verifyController };