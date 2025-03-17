import express from 'express'
import { askDoubt, getAllDoubts } from '../Controllers/doubt.controller.js'
import { hasToken } from '../Utils/verifyToken.js';

const doubtRoutes = express.Router()

doubtRoutes.post('/ask',hasToken,askDoubt);
doubtRoutes.get('/',getAllDoubts);

export default doubtRoutes;