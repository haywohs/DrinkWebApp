import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    drinks: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    }
})

export default mongoose.model("List", ListSchema);