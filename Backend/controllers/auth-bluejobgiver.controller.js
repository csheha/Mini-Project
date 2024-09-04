import BlueJobGiver from "../models/blue-jobgiver.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

        //web token
        const token = jwt.sign(
        {
            id:blueJobGiver._id,
        }, process.env.JWT_KEY)

        //3.Exclude the password from the response
        const {password, ...info} = blueJobGiver._doc;
        res.cookie("accessToken", token ,
            {
                httpOnly:true,
            }
        ).status(200).send(info)
    }
    catch(err)
    {
        res.status(500).send("Something went wrong!")
    }
}

export const logout = async (req,res)=>
{
    

}