import express from 'express';
import TitleController from './controllers/TitleController';

const router = express.Router();

router.post('/titles', TitleController.create);

router.get('/title/:id', TitleController.findOne);

export default router;
