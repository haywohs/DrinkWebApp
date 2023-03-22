import mongoose from "mongoose";

const DrinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    popularDrink: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model("Drink", DrinkSchema);