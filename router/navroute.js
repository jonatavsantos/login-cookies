import navcontroller from '../controllers/navcontroller.js';
import { Router } from 'express';

const router = Router()

router.get('/', navcontroller.getIndex);