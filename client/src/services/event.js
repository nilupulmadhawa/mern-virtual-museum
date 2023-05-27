import { axiosInstance, apiRequest } from './core/axios'

export const addEvent = async (data) => {
    return await apiRequest(() => axiosInstance.post(`/event`, data))
}

export const editEvent = async (id, data) => {
    return await apiRequest(() => axiosInstance.patch(`/event/${id}`, data))
}

export const getAllEvents = async (query = 'sort[created_at]=-1') => {
    return await apiRequest(() => axiosInstance.get(`/event?${query}`))
}

export const getEvent = async (id) => {
    return await apiRequest(() => axiosInstance.get(`/event/${id}`))
}

export const deleteEvent = async (id) => {
    return await apiRequest(() => axiosInstance.delete(`/event/${id}`))
}
