import { axiosInstance, apiRequest } from './core/axios';

export const addProduct = async (data) => {
  return await apiRequest(() => axiosInstance.post(`/product`, data));
};

export const editProduct = async (id, data) => {
  return await apiRequest(() => axiosInstance.patch(`/product/${id}`, data));
};

export const getAllProducts = async (query = 'sort[created_at]=-1') => {
  return await apiRequest(() => axiosInstance.get(`/product?${query}`));
};

export const getMyProducts = async (id) => {
  return await apiRequest(() => axiosInstance.get(`/product/${id}`));
};

export const deleteProduct = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`/product/${id}`));
};
