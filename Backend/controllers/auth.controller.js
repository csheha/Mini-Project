import BlueJobGiver from "../models/blue-jobgiver.model.js";
import bcrypt from "bcrypt";

export const signup = async (req,res)=>
{
    try
    {
        const hash = bcrypt.hashSync(req.body.password, 5)
        const newBlueJobGiver = new BlueJobGiver (
            {
                ...req.body,
                password:hash,
            }
        );

        await newBlueJobGiver.save();
        res.status(201).send("User has been created!");
    }
    catch(err)
    {
        res.status(500).send("Something went wrong!")
    }
}

export const login = async (req,res)=>
{
    
}

export const logout = async (req,res)=>
{
    

}