import Museum from '../models/museum'
import logger from '../utils/logger'

export const insertMuseum = async (museum) => {
    const museumMade = (await new Museum(museum).save()).toObject()
    return museumMade
}

export const getAllMuseums = async ({ sort = { created_at: -1 }, filter = {}, page, limit = 0 }) => {
    const museum = await Museum.find(filter).sort(sort).skip(page * limit).limit(limit).lean()
    if (!museum) return null
    return museum
}

export const getOneMuseum = async (filters) => {
    const museum = await Museum.findOne(filters).lean()
    if (!museum) return null
    return museum
}

export const findOneAndUpdateMuseum = async (filters, data) => {
    const museum = await Museum.findOneAndUpdate(filters, data, { new: true }).lean()
    if (!museum) return null
    return museum
}

export const findOneAndRemoveMuseum = async (filters) => {
    return await Museum.findOneAndRemove(filters)
}
