const mongoose = require("mongoose")

const verificationTokenModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique:true
    },
    tokenVerify: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600   // 1hr
    }
})

const VerificationToken = mongoose.model("VerificationToken", verificationTokenModel);
module.exports = VerificationToken;