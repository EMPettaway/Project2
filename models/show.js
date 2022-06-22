const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    showDate: {
        type: Number,
        default: function () {
            return new Date().getFullYear()
        }
    }, networkAired: String,
    matches: [String],
    liveShow: { type: Boolean, default: false },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    timestamps: true
});

module.exports = mongoose.model('Show', showSchema)