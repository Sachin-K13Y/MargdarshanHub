import express from 'express'
import dotenv from 'dotenv'
import doubtRoutes from './Routes/doubt.routes.js';
import { connectDB } from './Config/db.js';

dotenv.config();
const app = express();

connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening at ${process.env.PORT}`);
})

app.use('/doubts',doubtRoutes);