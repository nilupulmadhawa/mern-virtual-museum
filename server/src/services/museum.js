import { insertMuseum, findOneAndUpdateMuseum, findOneAndRemoveMuseum, getOneMuseum, getAllMuseums } from '../repository/museum'

export const createMuseum = async (data) => {
    return await insertMuseum(data)
}

export const getMuseums = async (query) => {
    try {
        return await getAllMuseums(query)
    } catch (error) {
        return error;
    }
}

export const getMuseumByID = async (id) => {
    try {
        const museum = await getOneMuseum({ _id: id })
        if (!museum)
            return {
                status: 404,
                message: 'Museum not found'
            }
        return museum
    } catch (error) {
        return error;
    }
}

export const updateMuseumdetails = async (museumId, museumDetails) => {
    try {
        const updatedMuseum = await findOneAndUpdateMuseum({ _id: museumId }, museumDetails)
        if (!updatedMuseum)
            return {
                status: 404,
                message: 'Museum not found'
            }
        return updatedMuseum
    } catch (error) {
        return error;
    }
}

export const deleteById = async (museumId) => {
    try {
        const deleted = await findOneAndRemoveMuseum({ _id: museumId })
        if (!deleted)
            return {
                status: 422,
                message: 'Museum not found'
            }
        return {
            status: 200,
            message: 'deleted successfully'
        }
    } catch (error) {
        return error;
    }
}


