import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const EventSchema = new mongoose.Schema(
    {
        Event_Title: {
            type: String,
            required: true
        },
        Event_Image: {
            type: String,
            required: true
        },
        Event_Subtitle: {
            type: String,
            required: true
        },
        Start_Date: {
            type: String,
            required: true
        },
        Time: {
            type: String,
            required: true
        },
        Event_Category: {
            type: String,
            required: true
        },
        Event_Description: {
            type: String,
            required: true,
    
        }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

EventSchema.plugin(aggregatePaginate)

EventSchema.index({ createdAt: 1 })

const Event = mongoose.model('Event', EventSchema)
Event.syncIndexes()

export default Event
