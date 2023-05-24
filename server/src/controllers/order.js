import asyncHandler from '../middleware/async';
import { makeResponse } from '../utils/response';
import {
  createOrder,
  getOrders,
  getOrderByID,
  updateOrderdetails,
  deleteById,
} from '../services/order';

export const create = asyncHandler(async (req, res) => {
  const result = await createOrder(req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: 'Failed to add Order',
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: 'Order added successfully' });
});

export const getAll = asyncHandler(async (req, res) => {
  try {
    const orders = await getOrders(req.query);
    return makeResponse({
      res,
      status: 200,
      data: orders,
      message: 'Orders retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const getById = asyncHandler(async (req, res) => {
  try {
    const ret = await getOrderByID(req.params.id);
    if (ret.status) return makeResponse({ res, ...ret });
    return makeResponse({
      res,
      status: 200,
      data: ret,
      message: 'Order retrieved succesfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});

export const update = asyncHandler(async (req, res) => {
  try {
    const result = await updateOrderdetails(req.params.id, req.body);
    if (!result)
      return makeResponse({
        res,
        status: 500,
        message: 'Failed to update Order',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Order updated successfully',
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
        message: 'Failed to delete Order',
      });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
      res,
      status: 200,
      data: result,
      message: 'Order deleted successfully',
    });
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message });
  }
});
