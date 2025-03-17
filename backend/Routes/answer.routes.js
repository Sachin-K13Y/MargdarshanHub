import express from 'express'
import { answer } from '../Controllers/answer.controller.js';
import { hasToken } from '../Utils/verifyToken.js';

const answerRoutes = express.Router();

answerRoutes.post('/:id',hasToken,answer);


export default answerRoutes;