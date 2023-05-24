import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const EventSchema = new mongoose.Schema(
    {
        museum_name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        },
        is_active: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

MuseumSchema.plugin(aggregatePaginate)

MuseumSchema.index({ createdAt: 1 })

const Museum = mongoose.model('Museum', MuseumSchema)
Museum.syncIndexes()

export default Museum
