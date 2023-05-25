import express from 'express';
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from '../controllers/blog';
import { celebrate, Segments } from 'celebrate';

import {
  addBlogSchema,
  blogViewSchema,
  blogIdSchema,
} from '../validations/blog';

const blogRouter = express.Router();

blogRouter.post(
  '/',
  celebrate({ [Segments.BODY]: addBlogSchema }),
  create
);
blogRouter.get(
  '/',
  celebrate({ [Segments.QUERY]: blogViewSchema }),
  getAll
);
blogRouter.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: blogIdSchema }),
  getById
);
blogRouter.patch(
  '/:id',
  celebrate({ [Segments.PARAMS]: blogIdSchema }),
  update
);
blogRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: blogIdSchema }),
  remove
);

export default blogRouter;
