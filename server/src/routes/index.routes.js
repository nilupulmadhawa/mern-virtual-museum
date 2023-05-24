import express from 'express';
import locationRouter from './location.routes';
import museumRouter from './museum.routes';

const router = express.Router();

router.use('/location', locationRouter);
router.use('/museum', museumRouter);

export default router;