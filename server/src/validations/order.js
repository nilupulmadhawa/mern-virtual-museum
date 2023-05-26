import { Joi } from 'celebrate';

export const addOrderSchema = Joi.object({
  date: Joi.string().required(),
  product: Joi.string().required(),
  qty: Joi.string().required(),
  price: Joi.string().required(),
  is_active: Joi.boolean().required(),
});

export const orderViewSchema = {
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

export const orderIdSchema = {
  id: Joi.string().hex().length(24).required(),
};
