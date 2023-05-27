import { axiosInstance, apiRequest } from './core/axios'

export const addBlog = async (data) => {
    return await apiRequest(() => axiosInstance.post(`/blog`, data))
}

export const editBlog = async (id, data) => {
    return await apiRequest(() => axiosInstance.patch(`/blog/${id}`, data))
}

export const getAllBlogs = async (query = 'sort[created_at]=-1') => {
    return await apiRequest(() => axiosInstance.get(`/blog?${query}`))
}

export const getMyBlogs = async (id) => {
    return await apiRequest(() => axiosInstance.get(`/blog/${id}`))
}

export const deleteBlog = async (id) => {
    return await apiRequest(() => axiosInstance.delete(`/blog/${id}`))
}
