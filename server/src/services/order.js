import {
  insertOrder,
  findOneAndUpdateOrder,
  findOneAndRemoveOrder,
  getOneOrder,
  getAllOrders,
} from '../repository/order';

export const createOrder = async (data) => {
  return await insertOrder(data);
};

export const getOrders = async (query) => {
  try {
    return await getAllOrders(query);
  } catch (error) {
    return error;
  }
};

export const getOrderByID = async (id) => {
  try {
    const order = await getOneOrder({ _id: id });
    if (!order)
      return {
        status: 404,
        message: 'Order not found',
      };
    return order;
  } catch (error) {
    return error;
  }
};

export const updateOrderdetails = async (orderId, orderDetails) => {
  try {
    const updatedOrder = await findOneAndUpdateOrder(
      { _id: orderId },
      orderDetails
    );
    if (!updatedOrder)
      return {
        status: 404,
        message: 'Order not found',
      };
    return updatedOrder;
  } catch (error) {
    return error;
  }
};

export const deleteById = async (orderId) => {
  try {
    const deleted = await findOneAndRemoveOrder({ _id: orderId });
    if (!deleted)
      return {
        status: 422,
        message: 'Order not found',
      };
    return {
      status: 200,
      message: 'deleted successfully',
    };
  } catch (error) {
    return error;
  }
};
