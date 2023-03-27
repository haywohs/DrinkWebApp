import List from '../models/List.js'
import { errorMessage } from '../errorMessage.js';
import Drink from '../models/Drink.js';


export const createList = async (req, res, next) => {
    const newList = new List(req.body);
    try {
        const saveList = await newList.save();
        res.status(200).json(saveList);
    } catch (error) {
        next(errorMessage(500, "wrong schema", error));
    }
};

export const getListContent = async (req, res, next) => {
    const listId = req.params.listId;
    try {
        const listDrink = await List.findById(listId);
        res.status(200).json(listDrink);
    } catch (error) {
        next(errorMessage(500, "wrong list id", error));
    }
};

export const updateList = async (req, res, next) => {
    const listId = req.params.listId;
    const updateBody = req.body;
    try {
        const listDrink = await List.findByIdAndUpdate(listId, { $set: updateBody }, { new: true });
        res.status(200).json(listDrink);
    } catch (error) {
        next(errorMessage(500, "wrong list id or schema", error));
    }
};

export const deleteList = async (req, res, next) => {
    const listId = req.params.listId;
    try {
        await List.findByIdAndDelete(listId);
        res.status(200).json("Success");
    } catch (error) {
        next(errorMessage(500, "wrong list id", error));
    }
};

export const getListDrinks = async (req, res, next) => {
    const listId = req.params.listId;
    try {
        const listData = await List.findById(listId);
        try {

            const listDrinks = await Promise.all(listData.drinks.map(drinkId => {
                return Drink.findById(drinkId);
            }))

            res.status(200).json(listDrinks);
        } catch (error) {
            next(errorMessage(500, "Fail to read the Drink database", error));
        }
    } catch (error) {
        next(errorMessage(500, "wrong list id", error));
    }
};