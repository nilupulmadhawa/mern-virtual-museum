import Category from '../models/category';
import logger from '../utils/logger';

export const insertCategory = async (category) => {
  const categoryMade = (await new Category(category).save()).toObject();
  return categoryMade;
};

export const getAllCategories = async ({
  sort = { created_at: -1 },
  filter = {},
  page,
  limit = 0,
}) => {
  const category = await Category.find(filter)
    .sort(sort)
    .skip(page * limit)
    .limit(limit)
    .lean();
  if (!category) return null;
  return category;
};

export const getOneCategory = async (filters) => {
  const category = await Category.findOne(filters).lean();
  if (!category) return null;
  return category;
};

export const findOneAndUpdateCategory = async (filters, data) => {
  const category = await Category.findOneAndUpdate(filters, data, {
    new: true,
  }).lean();
  if (!category) return null;
  return category;
};

export const findOneAndRemoveCategory = async (filters) => {
  return await Category.findOneAndRemove(filters);
};
