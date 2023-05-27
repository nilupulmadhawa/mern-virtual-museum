import asyncHandler from '../middleware/async';
import { makeResponse } from '../utils/response';
import {
  createArticle,
  getArticles,
  getArticleByID,
  updateArticledetails,
  deleteById,
} from '../services/article';

export const create = asyncHandler(async (req, res) => {
  const result = await createArticle(req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: 'Failed to add Article',
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: 'Article added successfully' });
});

export const getAll = asyncHandler(async (req, res) => {
  try {
    const Articles = await getArticles(req.query);
    return makeResponse({
      res,
      status: 200,
      data: Articles,
      message: 'Articles retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getById = asyncHandler(async (req, res) => {
  try {
    const ret = await getArticleByID(req.params.id);
    if (ret.status) return makeResponse({ res, ...ret });
    return makeResponse({
      res,
      status: 200,
      data: ret,
      message: 'Article retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const update = asyncHandler(async (req, res) => {
  try {
    const result = await updateArticledetails(req.params.id, req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: 'Failed to update Article',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Article updated successfully',
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
        message: 'Failed to delete Article',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Article deleted successfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});
