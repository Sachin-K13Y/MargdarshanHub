import express from 'express'
import dotenv from 'dotenv'
import doubtRoutes from './Routes/doubt.routes.js';
import { connectDB } from './Config/db.js';
import userRoute from './Routes/user.routes.js';
import cookieParser from 'cookie-parser';
import answerRoutes from './Routes/answer.routes.js';
import cors from 'cors'
import experienceRoutes from './Routes/experience.routes.js';

dotenv.config();
const app = express();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}));
app.use(express.json())
app.use(cookieParser())
connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening at ${process.env.PORT}`);
})

app.use('/doubts',doubtRoutes);
app.use('/user',userRoute);
app.use('/answer',answerRoutes)
app.use('/experience',experienceRoutes);