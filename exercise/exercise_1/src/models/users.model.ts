import mongoose from "mongoose";

const Schema = mongoose.Schema;

//tao model

const userSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    number: {
        type: 'number',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    phone: {
        type: 'number',
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('user', userSchema);