import express from 'express'
import { Login, Register } from '../Controllers/user.controller';



const userRoute = express.Router();

userRoute.post('/user/signup',Register);
userRoute.post('/user/login',Login)

export default userRoute;