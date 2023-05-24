import { insertEvent, findOneAndUpdateEvent, findOneAndRemoveEvent, getOneEvent, getAllEvents } from '../repository/museum'

export const createEvent = async (data) => {
    return await insertEvent(data)
}

export const getEvents = async (query) => {
    try {
        return await getAllEvents(query)
    } catch (error) {
        return error;
    }
}

export const getEventByID = async (id) => {
    try {
        const event = await getOneEvent({ _id: id })
        if (!event)
            return {
                status: 404,
                message: 'Event not found'
            }
        return event
    } catch (error) {
        return error;
    }
}

export const updateEventdetails = async (eventId, eventDetails) => {
    try {
        const updatedEvent = await findOneAndUpdateEvent({ _id: eventId }, eventDetails)
        if (!updatedEvent)
            return {
                status: 404,
                message: 'Event not found'
            }
        return updatedEvent
    } catch (error) {
        return error;
    }
}

export const deleteById = async (eventId) => {
    try {
        const deleted = await findOneAndRemoveEvent({ _id: eventId })
        if (!deleted)
            return {
                status: 422,
                message: 'Event not found'
            }
        return {
            status: 200,
            message: 'deleted successfully'
        }
    } catch (error) {
        return error;
    }
}


