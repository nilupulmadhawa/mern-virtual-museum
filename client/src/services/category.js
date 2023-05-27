import { axiosInstance, apiRequest } from './core/axios';

export const addCategory = async (data) => {
  return await apiRequest(() => axiosInstance.post(`/category`, data));
};

export const editCategory = async (id, data) => {
  return await apiRequest(() => axiosInstance.patch(`/category/${id}`, data));
};

export const getAllCategorys = async (query = 'sort[created_at]=-1') => {
  return await apiRequest(() => axiosInstance.get(`/category?${query}`));
};

export const getMyCategorys = async (id) => {
  return await apiRequest(() => axiosInstance.get(`/category/${id}`));
};

export const deleteCategory = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`/category/${id}`));
};
