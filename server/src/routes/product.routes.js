import express from 'express';
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from '../controllers/product';
import { celebrate, Segments } from 'celebrate';

import {
  addProductSchema,
  productViewSchema,
  productIdSchema,
} from '../validations/product';

const productRouter = express.Router();

productRouter.post(
  '/',
  celebrate({ [Segments.BODY]: addProductSchema }),
  create
);
productRouter.get(
  '/',
  celebrate({ [Segments.QUERY]: productViewSchema }),
  getAll
);
productRouter.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: productIdSchema }),
  getById
);
productRouter.patch(
  '/:id',
  celebrate({ [Segments.PARAMS]: productIdSchema }),
  update
);
productRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: productIdSchema }),
  remove
);

export default productRouter;
