import navcontroller from '../controllers/navcontroller.js';
import { Router } from 'express';
import authentication from '../middleware/auth.js';;

const router = Router()

router.get('/', navcontroller.getIndex);

router.get('/login', navcontroller.getLogin);

router.get('/logout', authentication.logout);

export default router