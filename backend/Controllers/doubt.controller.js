import Doubt from "../Models/doubt.model.js";

export const askDoubt = async(req,res)=>{
    try {
        console.log(req.user);
        const{question} = req.body;
        const doubt = new Doubt({
            question,
            askedBy:req.user.id
        }) 
        await doubt.save();
        res.json({message:'Question asked Successfully',doubt});
    } catch (error) {
        console.log(error);
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