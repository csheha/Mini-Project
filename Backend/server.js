import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bluejobgiverRoute from "./routes/blue-jobgiver.route.js";
import authbluejobgiverRoute from "./routes/auth-bluejobgiver.route.js";
import authbluejobseekerRoute from "./routes/auth-bluejobseeker.route.js";
import authwhitejobgiverRoute from "./routes/auth-whitejobgiver.route.js";
import authwhitejobseekerRoute from "./routes/auth-whitejobseeker.route.js";

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

app.use("/api/user/",bluejobgiverRoute);
app.use("/api/auth/bluejobgiver",authbluejobgiverRoute);
app.use("/api/auth/bluejobseeker",authbluejobseekerRoute);
app.use("/api/auth/whitejobgiver",authwhitejobgiverRoute);
app.use("/api/auth/whitejobseeker",authwhitejobseekerRoute);



app.listen(8800, ()=>
{
    connect();
    console.log("Backend server is running!")
})