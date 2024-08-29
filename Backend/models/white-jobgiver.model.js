import mongoose from 'mongoose';
const { Schema } = mongoose;

const WhiteJobGiverSchema = new Schema({
  FullName:
  {
    type:String,
    required:true,
    unique:true,
  },
  email:
  {
    type:String,
    required:true,
    unique:true,
  },
  password:
  {
    type:String,
    required:true,
  },
  address:
  {
    type:String,
    required:true,
  },
  ExpectedSkills:
  {
    type: [String], // Array of strings
    required: true,
  },
  Jobs:
  {
    type: [String], // Array of strings
    required: true,
  },
  
},
{
    timestamps:true
});

export default mongoose.model("WhiteJobGiver",WhiteJobGiverSchema);