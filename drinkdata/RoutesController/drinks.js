import { errorMessage } from "../errorMessage.js";
import Drink from "../models/Drink.js"


export const createDrink = async (req, res, next) => {
    const newDrink = new Drink(req.body);
    try {
        const saveDrink = await newDrink.save();
        res.status(200).json(saveDrink);
    } catch (error) {
        next(errorMessage(500, "wrong data schema", error));
    }
}

export const getDrink = async (req, res, next) => {
    const drinkId = req.params.id;
    try {
        const getDrink = await Drink.findById(drinkId);
        res.status(200).json(getDrink);
    } catch (error) {
        next(errorMessage(500, "wrong product id", error));
    }
}

export const updateDrink = async (req, res, next) => {
    const drinkId = req.params.id;
    const newBody = req.body;
    try {
        const updateDrink = await Drink.findByIdAndUpdate(drinkId, { $set: newBody }, { new: true })
        res.status(200).json(updateDrink);
    } catch (error) {
        next(errorMessage(500, "wrong product id or data schema", error));
    }
}

export const deleteDrink = async (req, res, next) => {
    const drinkId = req.params.id;
    try {
        await Drink.findByIdAndDelete(drinkId);
        res.status(200).json("Success");
    } catch (error) {
        next(errorMessage(500, "wrong product id", error));
    }
}