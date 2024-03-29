import { errorMessage } from "../errorMessage.js";
import Drink from "../models/Drink.js"
import List from "../models/List.js";


export const createDrink = async (req, res, next) => {
    const listId = req.params.listId;
    const newDrink = new Drink(req.body);
    try {
        const saveDrink = await newDrink.save();
        try {
            await List.findByIdAndUpdate(listId, { $push: { drinks: saveDrink.id } });
        } catch (error) {
            next(errorMessage(500, "wrong list id", error));
        }
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
    const listId = req.params.listId;
    const drinkId = req.params.id;
    try {
        await Drink.findByIdAndDelete(drinkId);
        try {
            await List.findByIdAndUpdate(listId, { $pull: { drinks: drinkId } });
        } catch (error) {
            next(error);
        }
        res.status(200).json("Success");
    } catch (error) {
        next(errorMessage(500, "wrong product id", error));
    }
}

export const getAll = async (req, res, next) => {
    try {
        const allDrink = await Drink.find();
        res.status(200).json(allDrink);
    } catch (error) {
        next(errorMessage(500, "Fail to get data", error));
    }
}