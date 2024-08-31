import WhiteJobGiver from "../models/white-jobgiver.model.js";
import bcrypt from "bcrypt";

export const signup = async (req,res)=>
{
    try
    {
        const hash = bcrypt.hashSync(req.body.password, 5)
        const newWhiteJobGiver = new WhiteJobGiver (
            {
                ...req.body,
                password:hash,
            }
        );

        await newWhiteJobGiver.save();
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
        const whiteJobGiver= await WhiteJobGiver.findOne({email:req.body.email});
        
        if(!whiteJobGiver)
        {return res.status(404).send("User not found!")};
        
        //2.Compare the provided password with the stored hash
        const isCorrect = bcrypt.compareSync(req.body.password,whiteJobGiver.password );
        if(!isCorrect)
        {return res.status(400).send("Wrong password or email!")};

        //3.Exclude the password from the response
        const {password, ...info} = whiteJobGiver._doc;
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