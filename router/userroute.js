import usercontroller from '../controllers/usercontroller.js';
import { Router } from 'express';

const router = Router()

router.post('/postuser', usercontroller.createUser);

router.post('/singin', usercontroller.signUser);

export default router