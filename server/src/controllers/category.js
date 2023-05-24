import asyncHandler from '../middleware/async';
import { makeResponse } from '../utils/response';
import {
  createCategory,
  getCategories,
  getCategoryByID,
  updateCategorydetails,
  deleteById,
} from '../services/category';

export const create = asyncHandler(async (req, res) => {
  const result = await createCategory(req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: 'Failed to add Category',
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: 'Category added successfully' });
});

export const getAll = asyncHandler(async (req, res) => {
  try {
    const categories = await getCategories(req.query);
    return makeResponse({
      res,
      status: 200,
      data: categories,
      message: 'Categories retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getById = asyncHandler(async (req, res) => {
  try {
    const ret = await getCategoryByID(req.params.id);
    if (ret.status) return makeResponse({ res, ...ret });
    return makeResponse({
      res,
      status: 200,
      data: ret,
      message: 'Category retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const update = asyncHandler(async (req, res) => {
  try {
    const result = await updateCategorydetails(req.params.id, req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: 'Failed to update Category',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Category updated successfully',
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
        message: 'Failed to delete Category',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});
