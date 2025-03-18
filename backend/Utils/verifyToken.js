import jwt, { decode } from 'jsonwebtoken'
import User from '../Models/user.model.js';

export const hasToken = async(req,res,next)=>{

    try{
    const token = req.cookies.token

    if(!token){
        return res.status(403).json({Success:false,message:"Unauthorized Access"});
    }

    const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
  
    req.user = decodedToken;
    
    
    next();
}
    catch(err){
        console.log(err);
        res.status(403).json({Success:false,message:"Internal Server Error"});
    }

 }
 export const isLogin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
  
        if (!token) {
            
            return res.status(401).json({ message: 'Unauthorized: Please Login ' });
        }
  
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            return res.status(404).json({Success:"false",message:"Not has Valid Token"});
        }
        const user = await User.findById(decoded.id);

        
        return res.status(200).json({Success:"true",message:"Token Verified",user});
        


        
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };

  export const test = (req,res)=>{
    res.status(200).json({message:"Hello World"});
  }