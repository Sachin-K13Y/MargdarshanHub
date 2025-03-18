import express from 'express'
import { addExperience, addUpvote, getAllExperience } from '../Controllers/experience.controller.js';
import { hasToken } from '../Utils/verifyToken.js';

const experienceRoutes = express.Router();

experienceRoutes.post('/addexperience',hasToken,addExperience);
experienceRoutes.get('/',getAllExperience);
experienceRoutes.get('/:id',addUpvote);


export default experienceRoutes;