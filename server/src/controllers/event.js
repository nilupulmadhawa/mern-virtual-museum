import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { createEvent, getEvents, getEventByID, updateEventdetails, deleteById } from '../services/event'



export const create = asyncHandler(async (req, res) => {
    const result = await createEvent(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to add Event' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Event added successfully' })
})

export const getAll = asyncHandler(async (req, res) => {
    try {
        const events = await getEvents(req.query)
        return makeResponse({ res, status: 200, data: events, message: 'Events retrieved succesfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message });
    }
})

export const getById = asyncHandler(async (req, res) => {
    try {
        const ret = await getEventByID(req.params.id)
        if (ret.status) return makeResponse({ res, ...ret })
        return makeResponse({ res, status: 200, data: ret, message: 'Event retrieved succesfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message });
    }
})

export const update = asyncHandler(async (req, res) => {
    try {
        const result = await updateEventdetails(req.params.id, req.body)
        if (!result) return makeResponse({ res, status: 500, message: 'Failed to update event' })
        if (result.status) return makeResponse({ res, ...result })
        return makeResponse({ res, status: 200, data: result, message: 'Event updated successfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message });
    }
})

export const remove = asyncHandler(async (req, res) => {
    try {
        const result = await deleteById(req.params.id)
        if (!result) return makeResponse({ res, status: 500, message: 'Failed to delete event' })
        if (result.status) return makeResponse({ res, ...result })
        return makeResponse({ res, status: 200, data: result, message: 'Event deleted successfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message });
    }
})
