import { axiosInstance, apiRequest } from './core/axios'

export const addMuseum = async (data) => {
    return await apiRequest(() => axiosInstance.post(`/museum`, data))
}

export const editMuseum = async (id, data) => {
    return await apiRequest(() => axiosInstance.patch(`/museum/${id}`, data))
}

export const getAllMuseums = async (query = 'sort[created_at]=-1') => {
    return await apiRequest(() => axiosInstance.get(`/museum?${query}`))
}

export const getMuseum = async (id) => {
    return await apiRequest(() => axiosInstance.get(`/museum/${id}`))
}

export const deleteMuseum = async (id) => {
    return await apiRequest(() => axiosInstance.delete(`/museum/${id}`))
}
