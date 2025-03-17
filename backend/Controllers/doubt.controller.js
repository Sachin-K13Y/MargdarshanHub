import Doubt from "../Models/doubt.model.js";

export const askDoubt = async(req,res)=>{
    try {
        const{question} = req.body;
        const doubt = new Doubt({
            question,
            askedBy:req.user.id
        }) 
        await question.save();
        res.json({message:'Question asked Successfully',question});
    } catch (error) {
        res.status(500).json({error:'Error in asking question'});
    }
}
export const getAllDoubts = async(req,res)=>{
        try {
            const doubt = await Doubt.find().populate('askedBy','name role');
            res.json(doubt);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching questions' });
        }
}