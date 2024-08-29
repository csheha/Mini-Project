import mongoose from 'mongoose';
const { Schema } = mongoose;

const WhiteJobSeekerSchema = new Schema({
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
  skills:
  {
    type: [String], // Array of strings
    required: true,
  },
  JobExpectations:
  {
    type: String,
    required: true,
  },
  InterestedCompanies:
  {
    type: String,
    required: true,
  },

},
{
    timestamps:true
});

export default mongoose.model("WhiteJobSeeker",WhiteJobSeekerSchema);