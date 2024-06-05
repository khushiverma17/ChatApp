const express = require('express');
const dotenv = require("dotenv");
const { default: mongoose } = require('mongoose');
const cors= require("cors");
const {notFound, errorHandler} = require("./middleware/errormiddleware")
const chatRoutes = require ("./Routes/chatRoutes")
const messageRoutes = require("./Routes/messageRoutes")
const userRoutes = require("./Routes/userRoutes")

const app = express();


app.use(
    cors({
      origin: "*",
    })
  );
dotenv.config();    
app.use(express.json());
app.use(cors())

const connectDb = async () => {
    
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is connected to database");
    }
    catch (err) {
        console.log("Server is not connected to database", err.message);
    }
}
connectDb();

app.get("/", (req, res) => {
    res.send("API is running")
})

app.use("/user", userRoutes)
app.use("/chat", chatRoutes)
app.use("/message", messageRoutes)

const PORT = process.env.PORT || 8080;
const server = app.listen(8080, console.log("Server is running"));
const io=require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
    pingTimeOut: 60000,
})

io.on("connection", (socket)=>{
    socket.on("setup", (user)=>{
        socket.join(user.data._id)
        socket.emit("connected")
    })
    socket.on("join chat", (room)=>{
        socket.join(room)
    })
    socket.on("new message",(newMessageStatus)=>{
        var chat= newMessageStatus.chat
        if(!chat.users){
            return console.log("chat.users not defined")
        }
        chat.users.forEach((user)=>{
            if(user._id==newMessageStatus.sender._id) return;
            socket.in(user._id).emit("message received", newMessageReceived);
        })
    })
})
