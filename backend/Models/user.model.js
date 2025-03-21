import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        required:true,
        type:String
    },
    role:{
        type:String,
        enum:['junior','senior','admin'],
        default:'junior'
    },
    name:{
        type:String,
        
    },
    isVerified:{
        type:Boolean,
        default:false
    }

},{timestamps:true});

const User = mongoose.model('User',userSchema);
export default User;