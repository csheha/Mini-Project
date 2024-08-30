import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bluejobgiverRoute from "./routes/blue-jobgiver.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
dotenv.config();

// Middleware to parse JSON request bodies
app.use(express.json())

//connecting the database 
const connect = async () =>{
    try 
    {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
    } 
    catch (error) 
    {
        console.log(error);
    }
}

app.use("/api/user",bluejobgiverRoute);
app.use("/api/auth",authRoute);


app.listen(8800, ()=>
{
    connect();
    console.log("Backend server is running!")
})