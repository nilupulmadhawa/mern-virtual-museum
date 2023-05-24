import express from 'express';
// import locationRouter from './location.routes';
// import museumRouter from './museum.routes';
import categoryRouter from './category.routes';

const router = express.Router();

// router.use('/location', locationRouter);
// router.use('/museum', museumRouter);
router.use('/category', categoryRouter);

export default router;
