import { Joi } from 'celebrate';

export const addArticleSchema = Joi.object({
  article: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string(),
  is_active: Joi.boolean().required(),
});

export const articleViewSchema = {
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

export const articleIdSchema = {
  id: Joi.string().hex().length(24).required(),
};
