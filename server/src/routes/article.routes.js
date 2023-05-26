import express from 'express';
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from '../controllers/article';
import { celebrate, Segments } from 'celebrate';

import {
  addArticleSchema,
  articleViewSchema,
  articleIdSchema,
} from '../validations/article';

const articleRouter = express.Router();

articleRouter.post(
  '/',
  celebrate({ [Segments.BODY]: addArticleSchema }),
  create
);
articleRouter.get(
  '/',
  celebrate({ [Segments.QUERY]: articleViewSchema }),
  getAll
);
articleRouter.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: articleIdSchema }),
  getById
);
articleRouter.patch(
  '/:id',
  celebrate({ [Segments.PARAMS]: articleIdSchema }),
  update
);
articleRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: articleIdSchema }),
  remove
);

export default articleRouter;
