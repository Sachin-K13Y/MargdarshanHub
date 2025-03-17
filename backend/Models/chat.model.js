import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    recieverId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
const Chat = mongoose.model('Chat',chatSchema);
export default Chat;