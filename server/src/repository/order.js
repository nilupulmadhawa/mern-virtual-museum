import Order from '../models/order';
import logger from '../utils/logger';

export const insertOrder = async (order) => {
  const orderMade = (await new Order(order).save()).toObject();
  return orderMade;
};

export const getAllOrders = async ({
  sort = { created_at: -1 },
  filter = {},
  page,
  limit = 0,
}) => {
  const order = await Order.find(filter)
    .sort(sort)
    .skip(page * limit)
    .limit(limit)
    .lean();
  if (!order) return null;
  return order;
};

export const getOneOrder = async (filters) => {
  const order = await Order.findOne(filters).lean();
  if (!order) return null;
  return order;
};

export const findOneAndUpdateOrder = async (filters, data) => {
  const order = await Order.findOneAndUpdate(filters, data, {
    new: true,
  }).lean();
  if (!order) return null;
  return order;
};

export const findOneAndRemoveOrder = async (filters) => {
  return await Order.findOneAndRemove(filters);
};
