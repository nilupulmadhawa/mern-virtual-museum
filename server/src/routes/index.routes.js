import express from 'express';
// import locationRouter from './location.routes';
import museumRouter from './museum.routes';
import categoryRouter from './category.routes';
import orderRouter from './order.routes';
import productRouter from './product.routes';
import blogRouter from './blog.routes';
import articleRouter from './article.routes';

const router = express.Router();

// router.use('/location', locationRouter);
router.use('/museum', museumRouter);
router.use('/category', categoryRouter);
router.use('/order', orderRouter);
router.use('/product', productRouter);
router.use('/blog', blogRouter);
router.use('/article', articleRouter);

export default router;
