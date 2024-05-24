import { Router } from 'express';
import AssetsValues from '../controllers/Assets/AssetsValues.js';

const router = Router();

export default router.get('/assets', AssetsValues);
