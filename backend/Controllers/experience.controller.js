import Experience from "../Models/experience.model.js";
import User from "../Models/user.model.js";

export const addExperience = async(req,res)=>{
    try{
    const seniorId = req.user.id
    const senior = User.findById(seniorId);

    console.log(senior);


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