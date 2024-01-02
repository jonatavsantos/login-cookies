import navcontroller from '../controllers/navcontroller.js';
import { Router } from 'express';

const router = Router()

router.get('/', navcontroller.getIndex);

router.get('/login', navcontroller.getLogin);

export default router