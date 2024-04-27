const express = require("express")
const{
    allMessages,
    sendMessages,
}=require ("../controllers/messageControllers")
const {protect} = require ("../middleware/authmiddleware")

const router = express.Router();

router.route("/:chatId").get(protect, allMessages)
router.route("/").post(protect, sendMessage);   //there might be an issue

module.exports= router;

