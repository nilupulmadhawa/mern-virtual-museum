import { getOneUser } from '../repository/user'
import { decodeJwtToken } from '../utils/jwt'
import { makeResponse } from '../utils/response'
import asyncHandler from './async'
import fetch from 'node-fetch';

export const protect = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization ? (req.headers.authorization.startsWith('Bearer') ? req.headers.authorization.split(' ')[1]?.replace('null', '')?.replace('undefined', '') : null) : null
    if (!token) return makeResponse({ res, status: 403, message: 'Unauthorized' })
    const decodedUser = decodeJwtToken(token).data
    const user = decodedUser ? await getOneUser({ _id: decodedUser._id }, false) : null
    if (!user) return makeResponse({ res, status: 403, message: 'Unauthorized' })
    req.user = user
    next()
})

export const userProtect = asyncHandler(async (req, res, next) => {
    if (req.user._id != req.params.id) return makeResponse({ res, status: 401, message: 'Unauthorized' })
    next()
})
