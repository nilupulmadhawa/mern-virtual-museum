import asyncHandler from '../middleware/async';
import { makeResponse } from '../utils/response';
import {
  createBlog,
  getBlogs,
  getBlogByID,
  updateBlogdetails,
  deleteById,
} from '../services/blog';

export const create = asyncHandler(async (req, res) => {
  const result = await createBlog(req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: 'Failed to add Blog',
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: 'Blog added successfully' });
});

export const getAll = asyncHandler(async (req, res) => {
  try {
    const blogs = await getBlogs(req.query);
    return makeResponse({
      res,
      status: 200,
      data: blogs,
      message: 'Blogs retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getById = asyncHandler(async (req, res) => {
  try {
    const ret = await getBlogByID(req.params.id);
    if (ret.status) return makeResponse({ res, ...ret });
    return makeResponse({
      res,
      status: 200,
      data: ret,
      message: 'Blog retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const update = asyncHandler(async (req, res) => {
  try {
    const result = await updateBlogdetails(req.params.id, req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: 'Failed to update Blog',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Blog updated successfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const remove = asyncHandler(async (req, res) => {
  try {
    const result = await deleteById(req.params.id);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: 'Failed to delete Blog',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});
