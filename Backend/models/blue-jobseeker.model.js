import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlueJobSeekerSchema = new Schema({
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
  JobExpectation:
  {
    type: [String], // Array of strings
    required: true,
  },
},
{
    timestamps:true
});

export default mongoose.model("BlueJobSeeker",BlueJobSeekerSchema);