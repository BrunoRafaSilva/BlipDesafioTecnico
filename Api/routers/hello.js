import { Router } from 'express';
import helloWorld from '../controllers/helloWorld.js';

const router = Router();

export default router.get('/', helloWorld);
