import { Router } from 'express';
import controllers from '../controllers/activity.js';

const router = Router();
router.get('/list', controllers.getAllActivities);

export default router;
