import express from 'express'
import { Login, Register } from '../Controllers/user.controller.js';



const userRoute = express.Router();

userRoute.post('/signup',Register);
userRoute.post('/login',Login)


export default userRoute;