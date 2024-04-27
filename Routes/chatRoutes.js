const {
    accessChat,
    fetchChats,
    fetchGroups,
    createGroupChat,
    groupExit,
}=require("../Controllers/chatControllers")

const {protect} = require("../middleware/authmiddleware")

const router= express.router();

router.route("/").post(protect, accessChat)
router.route("/").get(protect, fetchChats)
router.route("/createGroup").post(protect, createGroupChat)
router.route("/fetchGroups").get(protect, fetchGroups)
router.route("/groupExit").put(protect, groupExit)
router.route("/addSelfToGroup").put(protect, addSelfToGroup)


module.exports = router