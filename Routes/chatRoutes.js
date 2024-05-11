const express = require ("express")

const {
    accessChat,
    fetchChats,
    fetchGroups,
    createGroupChat,
    groupExit,
}= require("../Controllers/chatControllers")

const {protect} = require("../middleware/authmiddleware")

const router= express.Router();

router.route("/").post(protect, accessChat)
router.route("/").get(protect, fetchChats)
router.route("/createGroups").post(protect, createGroupChat)
router.route("/fetchGroups").get(protect, fetchGroups)
router.route("/groupExit").put(protect, groupExit)


module.exports = router