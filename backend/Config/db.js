import mongoose from "mongoose";

export const connectDB = async(req,res)=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connection Successful");
    })
    .catch((err)=>{
        console.log("MONGO DB Connection failed");
    })
}