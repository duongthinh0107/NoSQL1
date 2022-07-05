"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
});
module.exports = mongoose_1.default.model('contact', contactSchema);
//# sourceMappingURL=contact.model.js.map