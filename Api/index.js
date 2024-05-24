import express from 'express';
import dotenv from 'dotenv';
import router from './routers/router.js';

dotenv.config();

const app = express();
router(app);

const PORT = Number(process.env.PORT) || 30000;
app.listen(PORT, () => {
});
