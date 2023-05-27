import express from 'express';
// import locationRouter from './location.routes';
import museumRouter from './museum.routes';
import categoryRouter from './category.routes';
import orderRouter from './order.routes';
import productRouter from './product.routes';
import authRouter from './auth.routes';
import blogRouter from './blog.routes';
import articleRouter from './article.routes';
import eventRouter from './event.routes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/museum', museumRouter);
router.use('/category', categoryRouter);
router.use('/order', orderRouter);
router.use('/product', productRouter);
router.use('/blog', blogRouter);
router.use('/article', articleRouter);
router.use('/event', eventRouter);

export default router;
