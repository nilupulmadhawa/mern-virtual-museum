import Product from '../models/product';
import logger from '../utils/logger';

export const insertProduct = async (product) => {
  const productMade = (await new Product(product).save()).toObject();
  return productMade;
};

export const getAllProducts = async ({
  sort = { created_at: -1 },
  filter = {},
  page,
  limit = 0,
}) => {
  const product = await Product.find(filter)
    .sort(sort)
    .skip(page * limit)
    .limit(limit)
    .lean();
  if (!product) return null;
  return product;
};

export const getOneProduct = async (filters) => {
  const product = await Product.findOne(filters).lean();
  if (!product) return null;
  return product;
};

export const findOneAndUpdateProduct = async (filters, data) => {
  const product = await Product.findOneAndUpdate(filters, data, {
    new: true,
  }).lean();
  if (!product) return null;
  return product;
};

export const findOneAndRemoveProduct = async (filters) => {
  return await Product.findOneAndRemove(filters);
};
