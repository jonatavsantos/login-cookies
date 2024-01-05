import navcontroller from '../controllers/navcontroller.js';
import { Router } from 'express';
import usercontroller from '../controllers/usercontroller.js';

const router = Router()

router.get('/', navcontroller.getIndex);

router.get('/login', navcontroller.getLogin);

router.get('/logout', usercontroller.logoutUser);

router.get('/random', usercontroller.permissionUser, navcontroller.getRandom);

export default router