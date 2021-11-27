import mongoose from 'mongoose'

const userInfoSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    ip_address: {
        type: String,
        required: true
    }
})

export default mongoose.model('UserInfoModel', userInfoSchema)