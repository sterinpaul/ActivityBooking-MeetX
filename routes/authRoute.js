import { Router } from 'express';
import { signupSchema, signinSchema } from '../validations/joiValidation.js';
import validate from '../middlewares/schemaValidator.js';
import controllers from '../controllers/auth.js';

const router = Router();
router.post('/register', validate(signupSchema), controllers.register);
router.post('/login', validate(signinSchema), controllers.login);

export default router;
