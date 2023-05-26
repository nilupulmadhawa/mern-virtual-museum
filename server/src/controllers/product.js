import asyncHandler from '../middleware/async';
import { makeResponse } from '../utils/response';
import {
  createProduct,
  getProducts,
  getProductByID,
  updateProductdetails,
  deleteById,
} from '../services/product';

export const create = asyncHandler(async (req, res) => {
  const result = await createProduct(req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: 'Failed to add Product',
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: 'Product added successfully' });
});

export const getAll = asyncHandler(async (req, res) => {
  try {
    const products = await getProducts(req.query);
    return makeResponse({
      res,
      status: 200,
      data: products,
      message: 'Products retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getById = asyncHandler(async (req, res) => {
  try {
    const ret = await getProductByID(req.params.id);
    if (ret.status) return makeResponse({ res, ...ret });
    return makeResponse({
      res,
      status: 200,
      data: ret,
      message: 'Product retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const update = asyncHandler(async (req, res) => {
  try {
    const result = await updateProductdetails(req.params.id, req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: 'Failed to update Product',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Product updated successfully',
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
        message: 'Failed to delete Product',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});
