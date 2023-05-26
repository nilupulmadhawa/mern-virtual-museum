import express from 'express';
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from '../controllers/category';
import { celebrate, Segments } from 'celebrate';

import {
  addCategorySchema,
  categoryViewSchema,
  categoryIdSchema,
} from '../validations/category';

const categoryRouter = express.Router();

categoryRouter.post(
  '/',
  celebrate({ [Segments.BODY]: addCategorySchema }),
  create
);
categoryRouter.get(
  '/',
  celebrate({ [Segments.QUERY]: categoryViewSchema }),
  getAll
);
categoryRouter.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: categoryIdSchema }),
  getById
);
categoryRouter.patch(
  '/:id',
  celebrate({ [Segments.PARAMS]: categoryIdSchema }),
  update
);
categoryRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: categoryIdSchema }),
  remove
);

export default categoryRouter;
