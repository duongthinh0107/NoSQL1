import mongoose from "mongoose";

const Schema = mongoose.Schema;

//tao model

const contactSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    address: {
        type: 'string',
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

module.exports = mongoose.model('contact', contactSchema);