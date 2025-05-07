import { Router } from 'express';
import controllers from '../controllers/booking.js';
import authenticate from '../middlewares/authMiddleware.js';

const router = Router();
router.post('/', authenticate, controllers.bookActivity);
router.get('/', authenticate, controllers.getMyBookings);

export default router;
