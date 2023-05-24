import Device from '../models/device'
import logger from '../utils/logger'

export const insertDevice = async (device) => {
    const deviceMade = (await new Device(device).save()).toObject()
    return deviceMade
}

export const getAllDevices = async ({ sort = { created_at: -1 }, filter = {}, page, limit = 0 }) => {
    const device = await Device.find(filter).sort(sort).skip(page * limit).limit(limit).lean()
    if (!device) return null
    return device
}

export const getOneDevice = async (filters) => {
    const device = await Device.findOne(filters).lean()
    if (!device) return null
    return device
}

export const findOneAndUpdateDevice = async (filters, data) => {
    const device = await Device.findOneAndUpdate(filters, data, { new: true }).lean()
    if (!device) return null
    return device
}

export const findOneAndRemoveDevice = async (filters) => {
    return await Device.findOneAndRemove(filters)
}
