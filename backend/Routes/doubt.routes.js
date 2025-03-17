import express from 'express'
import { askDoubt, getAllDoubts } from '../Controllers/doubt.controller.js'

const doubtRoutes = express.Router()

doubtRoutes.post('/ask',askDoubt);
doubtRoutes.get('/',getAllDoubts);

export default doubtRoutes;