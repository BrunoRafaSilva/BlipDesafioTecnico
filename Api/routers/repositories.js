import { Router } from 'express';
import repositoriesCarousel from '../controllers/Repository/repositoriesCarousel.js';

const router = Router();

export default router.get('/repositoriesCarousel', repositoriesCarousel);
