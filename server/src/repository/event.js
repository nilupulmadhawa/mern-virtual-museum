import Event from '../models/event'
import logger from '../utils/logger'

export const insertEvent = async (event) => {
    const eventMade = (await new Event(event).save()).toObject()
    return eventMade
}

export const getAllEvents = async ({ sort = { created_at: -1 }, filter = {}, page, limit = 0 }) => {
    const event = await Event.find(filter).sort(sort).skip(page * limit).limit(limit).lean()
    if (!event) return null
    return event
}

export const getOneEvent = async (filters) => {
    const event = await Event.findOne(filters).lean()
    if (!event) return null
    return event
}

export const findOneAndUpdateEvent = async (filters, data) => {
    const event = await Event.findOneAndUpdate(filters, data, { new: true }).lean()
    if (!event) return null
    return event
}

export const findOneAndRemoveEvent = async (filters) => {
    return await Event.findOneAndRemove(filters)
}
