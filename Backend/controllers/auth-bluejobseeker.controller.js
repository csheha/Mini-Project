import BlueJobSeeker from "../models/blue-jobseeker.model.js";
import bcrypt from "bcrypt";

export const signup = async (req,res)=>
{
    try
    {
        const hash = bcrypt.hashSync(req.body.password, 5)
        const newBlueJobSeeker = new BlueJobSeeker (
            {
                ...req.body,
                password:hash,
            }
        );

        await newBlueJobSeeker.save();
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
        const blueJobSeeker= await BlueJobSeeker.findOne({email:req.body.email});
        
        if(!blueJobSeeker)
        {return res.status(404).send("User not found!")};
        
        //2.Compare the provided password with the stored hash
        const isCorrect = bcrypt.compareSync(req.body.password,blueJobSeeker.password );
        if(!isCorrect)
        {return res.status(400).send("Wrong password or email!")};

        //3.Exclude the password from the response
        const {password, ...info} = blueJobSeeker._doc;
        res.status(200).send(info)
    }
    catch(err)
    {
        res.status(500).send("Something went wrong!")
    }
}

export const logout = async (req,res)=>
{
    

}