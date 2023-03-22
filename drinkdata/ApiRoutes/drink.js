import express from "express";
import Drink from "../models/Drink.js"

const router = express.Router();

router.post("/", async (req, res) => {
    const newDrink = new Drink(req.body);
    try {
        const saveDrink = await newDrink.save();
        res.status(200).json(saveDrink);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router;