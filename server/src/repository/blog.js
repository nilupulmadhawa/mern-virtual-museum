import Blog from '../models/blog';
import logger from '../utils/logger';

export const insertBlog = async (blog) => {
  const blogMade = (await new Blog(blog).save()).toObject();
  return blogMade;
};

export const getAllBlogs = async ({
  sort = { created_at: -1 },
  filter = {},
  page,
  limit = 0,
}) => {
  const blog = await Blog.find(filter)
    .sort(sort)
    .skip(page * limit)
    .limit(limit)
    .lean();
  if (!blog) return null;
  return blog;
};

export const getOneBlog = async (filters) => {
  const blog = await Blog.findOne(filters).lean();
  if (!blog) return null;
  return blog;
};

export const findOneAndUpdateBlog = async (filters, data) => {
  const blog = await Blog.findOneAndUpdate(filters, data, {
    new: true,
  }).lean();
  if (!blog) return null;
  return blog;
};

export const findOneAndRemoveBlog = async (filters) => {
  return await Blog.findOneAndRemove(filters);
};
