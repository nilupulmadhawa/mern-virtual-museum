import express from 'express';
// import locationRouter from './location.routes';
import museumRouter from './museum.routes';
import categoryRouter from './category.routes';
import orderRouter from './order.routes';
import productRouter from './product.routes';
import authRouter from './auth.routes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/museum', museumRouter);
router.use('/category', categoryRouter);
router.use('/order', orderRouter);
router.use('/product', productRouter);

export default router;
