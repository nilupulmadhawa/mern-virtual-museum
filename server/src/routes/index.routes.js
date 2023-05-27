import express from 'express';
import userRouter from './user.routes';
import authRouter from './auth.routes';
import eventRouter from './event.routes';

const router = express.Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/event', eventRouter);

export default router;