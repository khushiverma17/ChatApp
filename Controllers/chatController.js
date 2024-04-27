const asyncHandler = require("express-async-handler")
const Chat = require("../models/chatModel")
const User = require("../models/userModel")


// Wraps the function in an error handler middleware (asyncHandler) to catch any asynchronous errors that might occur during its execution
const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        console.log("UserId param not sent with request")
        return res.sendStatus(400);
    }
    // Queries the Chat collection to find chats where isGroupChat is false and both the authenticated user (req.user._id) and the specified userId are participants.
    var isChat = await Chat.find({
        isGroupChat: false,
        $ans: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } },
        ]
    })
    /*so what is populate? suppose i have 2 collections of database called users and latestMessage
    chat colection:
    {
        "_id": "chat_id_123",
        "users": ["user_id_1", "user_id_2"],
        "latestMessage": "message_id_456"
      }
    After populating 
    {
  "_id": "chat_id_123",
  "users": [
    {
      "_id": "user_id_1",
      "name": "User 1",
      "email": "user1@example.com"
    },
    {
      "_id": "user_id_2",
      "name": "User 2",
      "email": "user2@example.com"
    }
  ],
  "latestMessage": {
    "_id": "message_id_456",
    "content": "Hello!",
    "sender": {
      "_id": "user_id_1",
      "name": "User 1",
      "email": "user1@example.com"
    }
  }
}
    */
        .populate("users", "-password")
        .populate("latestMessage")


    isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "name email",
    })

    if (isChat.length > 0) {
        res.send(isChat[0]);
    }
    else {
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        };
        try {
            const createdChat = await Chat.create(chatData);
            const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
                "users",
                "-password"
            )
            res.status(200).json(FullChat);
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }

});



const fetchChats = asyncHandler(async (req, res) => {
    try {
        console.log("Fetch Chats API: ", req);
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then(async (results) => {
                results = await User.populate(results, {
                    path: "latestMessage.sender",
                    select: "name email"
                });
                res.status(200).send(results);

            });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


const fetchGroups = asyncHandler(async (req, res) => {
    try {
        const allGroups = await Chat.where("isGroupChat").equals(true);
        res.status(200).send(allGroups);
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

const createGroupChat = asyncHandler(async (req, res) => {
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "Data is insufficient" })
    }
    var users = JSON.parse(req.body.users)
    console.log("chatController/createGroups: ", req);
    users.push(req.user);

    try{
        const groupChat=await Chat.create({
            chatName: req.body.name,
            users:users,
            isGroupChat:true,
            groupAdmin:req.user,
        })
        const fullGroupChat=await Chat.findOne({_id:groupChat._id})
        .populate("users", "-password")
        .populate("groupAdmin", "-password")

        res.status(200).json(fullGroupChat);
    }catch(error){
        res.status(400)
        throw new Error(error.message);
    }
})

const groupExit=asyncHandler(async(req, res)=>{
    const {chatId, userId}=req.body;

    //check if the requester is an admin
    const removed=await Chat.findByIdAndUpdate(
        chatId,
        {
            $pull:{users:userId},
        },
        {
            new:true,
        }
    )
    .populate("users", "-password")
    .populate("groupAdmin", "-password")

    if(!removed){
        res.status(404);
        throw new Error("Chat Not Found");
    }else{
        res.json(removed);
    }
        
})

const addSelfToGroup=asyncHandler(async(req, res)=>{
    const {chatId, userId}=req.body

    const added= await Chat.findByIdAndUpdate(
        chatId,
        {
            $push:{users:userId},
        },
        {
            new:true,
        }
    )
    .populate("users", "-password")
    .populate("groupAdmin", "-password")

    if(!added){
        res.status(404)
        throw new Error("Chat Not Found")
    }else{
        res.json(added);
    }
})


module.exports={
    accessChat,
    fetchChats,
    fetchGroups,
    createGroupChat,
    groupExit,
    addSelfToGroup,
}