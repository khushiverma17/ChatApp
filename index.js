const express = require('express');
const dotenv = require("dotenv");
const { default: mongoose } = require('mongoose');
const userRoutes = require("./Routes/userRoutes")
const cors= require("cors");
const {notFound, errorHandler} = require("./middleware/errormiddleware")
const app = express();


app.use(
    cors({
        origin:"*",
    })
)
dotenv.config();    




app.use(express.json());


//to make connection to our database

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
// app.use(express.json());

app.use(notFound);
app.use(errorHandler);


console.log(process.env.MONGO_URI)



const PORT = process.env.PORT || 5000;

app.listen(5000, console.log("Server is running"));
