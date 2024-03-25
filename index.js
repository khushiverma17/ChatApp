const express = require('express');
const dotenv = require("dotenv");
const { default: mongoose } = require('mongoose');
const userRoutes = require("./Routes/userRoutes")

const app = express();
dotenv.config();
app.use(express.json());


//to make connection to our database

const connectDb = async () => {
    
    try {
        const connect = await mongoose.connect(process.env.mongo_URI);
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
// app.use(express.json());


console.log(process.env.mongo_URI)


const PORT = process.env.PORT || 8080;

app.listen(8080, console.log("Server is running"));