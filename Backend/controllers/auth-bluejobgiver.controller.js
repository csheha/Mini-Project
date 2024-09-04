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
    try
    {   //1.Find the user in the database by email
        const blueJobGiver= await BlueJobGiver.findOne({email:req.body.email});
        
        if(!blueJobGiver)
        {return res.status(404).send("User not found!")};
        
        //2.Compare the provided password with the stored hash
        const isCorrect = bcrypt.compareSync(req.body.password,blueJobGiver.password );
        if(!isCorrect)
        {return res.status(400).send("Wrong password or email!")};

        
    }
    catch(err)
    {
        res.status(500).send("Something went wrong!")
    }
}

export const logout = async (req,res)=>
{
    

}