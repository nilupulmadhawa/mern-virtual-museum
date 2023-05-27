import mongoose from 'mongoose'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        is_active: {
            type: Boolean,
            required: true,
            default: true
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

UserSchema.plugin(aggregatePaginate)

UserSchema.index({ createdAt: 1 })

const User = mongoose.model('User', UserSchema)

User.syncIndexes()

export default User
