import express from 'express'
import { Login, Register } from '../Controllers/user.controller.js';
import { hasToken, isLogin, test } from '../Utils/verifyToken.js';



const userRoute = express.Router();

userRoute.post('/signup',Register);
userRoute.post('/login',Login)
userRoute.get('/auth',isLogin)


export default userRoute;