import express from 'express';
import { create, getAll, getById, remove, update } from '../controllers/order';
import { celebrate, Segments } from 'celebrate';

import {
  addOrderSchema,
  orderViewSchema,
  orderIdSchema,
} from '../validations/order';

const orderRouter = express.Router();

orderRouter.post('/', celebrate({ [Segments.BODY]: addOrderSchema }), create);
orderRouter.get('/', celebrate({ [Segments.QUERY]: orderViewSchema }), getAll);
orderRouter.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: orderIdSchema }),
  getById
);
orderRouter.patch(
  '/:id',
  celebrate({ [Segments.PARAMS]: orderIdSchema }),
  update
);
orderRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: orderIdSchema }),
  remove
);

export default orderRouter;
