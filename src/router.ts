import express from 'express';
import TitleController from './controllers/TitleController';

const router = express.Router();

router.get('/titles/:id', TitleController.findOne);

router.post('/titles', TitleController.create);

router.delete('/titles/:id', TitleController.delete);

router.get('/titlesByDate', TitleController.findByDate);

export default router;
