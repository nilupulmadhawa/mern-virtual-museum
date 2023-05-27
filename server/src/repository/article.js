import Article from '../models/article';
import logger from '../utils/logger';

export const insertArticle = async (article) => {
  const articleMade = (await new Article(article).save()).toObject();
  return articleMade;
};

export const getAllArticles = async ({
  sort = { created_at: -1 },
  filter = {},
  page,
  limit = 0,
}) => {
  const article = await Article.find(filter)
    .sort(sort)
    .skip(page * limit)
    .limit(limit)
    .lean();
  if (!article) return null;
  return article;
};

export const getOneArticle = async (filters) => {
  const article = await Article.findOne(filters).lean();
  if (!article) return null;
  return article;
};

export const findOneAndUpdateArticle = async (filters, data) => {
  const article = await Article.findOneAndUpdate(filters, data, {
    new: true,
  }).lean();
  if (!article) return null;
  return article;
};

export const findOneAndRemoveArticle = async (filters) => {
  return await Article.findOneAndRemove(filters);
};
