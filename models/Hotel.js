const { Schema, model } = require('mongoose');

const hotelSchema = new Schema({
    name: { type: String, required: [true, 'All fields are required'], minlength: 4 },
    city: { type: String, required: [true, 'All fields are required'], minLength: 3, },
    imageUrl: { type: String, required: [true, 'All fields are required'], match: [/^https?/, 'Image must be valid URL'] },
    rooms: { type: Number, required: [true, 'All fields are required'], min: 1, max: 100 },
    bookedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    owner: { type: Schema.Types.ObjectId, ref: "User" }
})

module.exports = model('Hotel', hotelSchema);