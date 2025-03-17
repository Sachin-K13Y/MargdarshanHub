import express from 'express'
import { addExperience } from '../Controllers/experience.controller.js';
import { hasToken } from '../Utils/verifyToken.js';

const experienceRoutes = express.Router();

experienceRoutes.post('/addexperience',hasToken,addExperience);

export default experienceRoutes;