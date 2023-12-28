import usercontroller from '../controllers/usercontroller.js';
import { Router } from 'express';

const router = Router()

router.post('/postuser', usercontroller.createUser)

export default router