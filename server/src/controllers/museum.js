import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { createMuseum, getMuseums, getMuseumByID, updateMuseumdetails, deleteById } from '../services/museum'

export const create = asyncHandler(async (req, res) => {
    const result = await createMuseum(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to add museum' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Museum added successfully' })
})

export const getAll = asyncHandler(async (req, res) => {
    try {
        const museums = await getMuseums(req.query)
        return makeResponse({ res, status: 200, data: museums, message: 'Museums retrieved succesfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message });
    }
})

export const getById = asyncHandler(async (req, res) => {
    try {
        const ret = await getMuseumByID(req.params.id)
        if (ret.status) return makeResponse({ res, ...ret })
        return makeResponse({ res, status: 200, data: ret, message: 'Museum retrieved succesfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message });
    }
})

export const update = asyncHandler(async (req, res) => {
    try {
        const result = await updateMuseumdetails(req.params.id, req.body)
        if (!result) return makeResponse({ res, status: 500, message: 'Failed to update museum' })
        if (result.status) return makeResponse({ res, ...result })
        return makeResponse({ res, status: 200, data: result, message: 'Museum updated successfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message });
    }
})

export const remove = asyncHandler(async (req, res) => {
    try {
        const result = await deleteById(req.params.id)
        if (!result) return makeResponse({ res, status: 500, message: 'Failed to delete museum' })
        if (result.status) return makeResponse({ res, ...result })
        return makeResponse({ res, status: 200, data: result, message: 'Museum deleted successfully' })
    } catch (error) {
        return makeResponse({ res, status: 500, message: error.message });
    }
})

