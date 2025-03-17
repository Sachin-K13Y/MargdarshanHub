import Doubt from "../Models/doubt.model.js";

export const answer = async(req,res)=>{
    try{
    const id = req.params.id;
    const {answerText} = req.body;
    const userId = req.user.id;
    
    const newAnswer = {
        answeredBy: userId,
        answerText: answerText,
        createdAt: Date.now()
    };

    const question = await Doubt.findById(id);
    question.answers.push(newAnswer);
    await question.save();
    

    return res.status(200).json({message:"Answered Successfully",question});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:"error in answering",answer})
    }
}

