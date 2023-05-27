import { Joi } from 'celebrate';

export const addProductSchema = Joi.object({
  product: Joi.string().required(),
  category: Joi.string().required(),
  image: Joi.string(),
  price: Joi.string().required(),
  is_active: Joi.boolean(),
});

export const productViewSchema = {
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

export const productIdSchema = {
  id: Joi.string().hex().length(24).required(),
};
