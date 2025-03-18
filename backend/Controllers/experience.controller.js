import Experience from "../Models/experience.model.js";
import User from "../Models/user.model.js";

export const addExperience = async(req,res)=>{
    try{
    const seniorId = req.user.id
    const senior = await User.findById(seniorId);

    console.log(senior.role)
    
    if(senior.role=='junior'){
        return res.status(300).json({message:"You don't have access to write messages"});
    }

   


    const {company,experienceType,description} = req.body;

    const newExperience = new Experience({
        seniorId,
        company,
        experienceType,
        description,
    })

    await newExperience.save();
    res.status(200).json({message:"Experience Added successfully",newExperience});
        }
        catch(err){
            res.status(404).json({message:"Error in adding expereince"});
        }

}

export const getAllExperience = async(req,res)=>{
    try{
    const response = await Experience.find()
    
    res.status(200).json({message:"Fetched All The Experiences",response});
    }
    catch(err){
        res.status(300).json({message:"Internal Server Error",err});
    }
}
export const addUpvote = async(req,res)=>{
    try{
    const expId = req.params.id;
    
    const foundExperience = await Experience.findById(expId);

    if(!foundExperience){
        return res.status(404).json({message:"Not Found Experience"});
    }

    foundExperience.upvotes +=1;

    await foundExperience.save();

    return res.status(200).json({message:"Upvoted Successfully",foundExperience});
}
catch(err){
    return res.status(300).json({message:"Internal Server Error",err});
}
}