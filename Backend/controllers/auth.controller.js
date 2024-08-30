import BlueJobGiver from "../models/blue-jobgiver.model.js";

export const signup = async (req,res)=>
{
    try
    {
        const newBlueJobGiver = new BlueJobGiver (req.body);

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