import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authbluejobgiverRoute from "./routes/auth-bluejobgiver.route.js";
import authbluejobseekerRoute from "./routes/auth-bluejobseeker.route.js";
import authwhitejobgiverRoute from "./routes/auth-whitejobgiver.route.js";
import authwhitejobseekerRoute from "./routes/auth-whitejobseeker.route.js";

import bluejobgiverRoute from "./routes/blue-jobgiver.route.js";
import bluejobseekerRoute from "./routes/blue-jobseeker.route.js";
import whitejobgiverRoute from "./routes/white-jobgiver.route.js";
import whitejobseekerRoute from "./routes/white-jobseeker.route.js";

import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// Middlewares
app.use(express.json())
app.use(cookieParser())

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

app.use("/api/auth/bluejobgiver",authbluejobgiverRoute);
app.use("/api/auth/bluejobseeker",authbluejobseekerRoute);
app.use("/api/auth/whitejobgiver",authwhitejobgiverRoute);
app.use("/api/auth/whitejobseeker",authwhitejobseekerRoute);

app.use("/api/user/bluejobgiver",bluejobgiverRoute);
app.use("/api/user/bluejobseeker",bluejobseekerRoute);
app.use("/api/user/whitejobgiver",whitejobgiverRoute);
app.use("/api/user/whitejobseeker",whitejobseekerRoute);

app.listen(8800, ()=>
{
    connect();
    console.log("Backend server is running!")
})