import { Joi } from 'celebrate';

export const addBlogSchema = Joi.object({
  blog: Joi.string(),
  description: Joi.string(),
  image: Joi.string(),
  author_name: Joi.string(),
  date: Joi.string(),
  author_image: Joi.string(),
  is_active: Joi.boolean(),
});

export const blogViewSchema = {
  filter: Joi.object()
    .keys({
      created_at: Joi.string().hex().length(24).optional(),
      updated_at: Joi.string().hex().length(24).optional(),
    })
    .optional(),
  sort: Joi.object()
    .keys({
      created_at: Joi.any().valid('asc', 'desc', '1', '-1', 1, -1).optional(),
      updated_at: Joi.any().valid('asc', 'desc', '1', '-1', 1, -1).optional(),
    })
    .optional(),
  page: Joi.number().optional(),
  limit: Joi.number().optional(),
};

export const blogIdSchema = {
  id: Joi.string().hex().length(24).required(),
};
