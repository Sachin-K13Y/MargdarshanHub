import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    seniorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    company:{
        type:String,
        required:true
    },
    experienceType:{
        type:String,
        enum:['internship','full-time'],
        required:true
    },
    description:{
        type:String,
        required:true
    },
    upvotes:{
        type:Number,
        default:0
    },

    
},{timestamps:true});

const Experience = mongoose.model('Experience',experienceSchema);
export default Experience;