import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const EventSchema = new mongoose.Schema(
    {
        event_title: {
            type: String,
            required: true
        },
        event_image: {
            type: String,
            required: false
        },
        event_subtitle: {
            type: String,
            required: true
        },
        start_date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        event_category: {
            type: String,
            required: true
        },
        event_description: {
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
