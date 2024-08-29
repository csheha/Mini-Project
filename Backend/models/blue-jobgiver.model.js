import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlueJobGiverSchema = new Schema({
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
  AvailableJobs:
  {
    type: [String], // Array of strings
    required: true,
  },
},
{
    timestamps:true
});

export default mongoose.model("BlueJobGiver",BlueJobGiverSchema);