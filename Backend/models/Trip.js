const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({

    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    },
    
    destination: {
        type: String,
        required: true
    },

    days: {
        type: Number,
        required: true
    },

    travellers: {
        type: Number,
        required: true
    },

    travelStyle: {
        type: String,
        required: true
    },

    interests: {
        type: [String],
        required: true
    },

    aiTrip: {
        type: Object,
        required: false
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Trip", tripSchema);