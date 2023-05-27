import { Joi } from 'celebrate';

export const addCategorySchema = Joi.object({
  category: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string(),
  is_active: Joi.boolean(),
});

export const categoryViewSchema = {
  filter: Joi.object()
    .keys({
      category: Joi.string().optional(),
      created_at: Joi.string().optional(),
      updated_at: Joi.string().optional(),
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

export const categoryIdSchema = {
  id: Joi.string().hex().length(24).required(),
};
