import { axiosInstance, apiRequest } from './core/axios'

export const login = async (data) => {
    return await apiRequest(() => axiosInstance.post(`/auth/login`, data))
}
