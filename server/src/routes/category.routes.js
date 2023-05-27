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
import { protect } from '../middleware/auth'

const categoryRouter = express.Router();

categoryRouter.post(
    '/',
    celebrate({ [Segments.BODY]: addCategorySchema }),
    protect,
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
    protect,
    update
);
categoryRouter.delete(
    '/:id',
    celebrate({ [Segments.PARAMS]: categoryIdSchema }),
    protect,
    remove
);

export default categoryRouter;
