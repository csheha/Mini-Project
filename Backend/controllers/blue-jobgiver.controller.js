import BlueJobGiver from "../models/blue-jobgiver.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const deleteUser = async (req,res)=>
    {
        const blueJobGiver = await BlueJobGiver.findById(req.params.id)
        const token = req.cookies.accessToken;
        if(!token)
        {return res.status(401).send("You are not authenticated!")}

        jwt.verify(token, process.env.JWT_KEY, async(err,payload)=>
        { 
            if(payload.id !== blueJobGiver._id.toString())
            {
                return res.status(403).send("You can delete only your account!")
            }
            
           
            await BlueJobGiver.findByIdAndDelete(req.params.id)
        }

        
    )}

