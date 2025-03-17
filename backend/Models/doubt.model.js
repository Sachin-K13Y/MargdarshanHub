import mongoose, { mongo } from 'mongoose';

const doubtSchema = new mongoose.Schema({
    askedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
    question:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['open','answered','closed'],
        default:'open'
    },
    answers:[{
        answeredBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            answerText:{type:String},
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    }]
},{timestamps:true});

const Doubt = mongoose.model('Doubt',doubtSchema);
export default Doubt;