import express from "express";
import { createDrink, getDrink, updateDrink, deleteDrink, getAll } from "../RoutesController/drinks.js";
import { getListDrinks } from "../RoutesController/lists.js";
const router = express.Router();


router.post("/:listId", createDrink
    //separate the api url and function
    // async (req, res, next) => {
    //     const newDrink = new Drink(req.body);
    //     try {
    //         const saveDrink = await newDrink.save();
    //         res.status(200).json(saveDrink);
    //     } catch (error) {
    //         next(errorMessage(500, "wrong data schema", error));
    //         //next(error);
    //         // res.status(500).json(error);
    //     }}
)

router.get("/:id", getDrink
    // async (req, res) => {
    //     const drinkId = req.params.id;
    //     try {
    //         const getDrink = await Drink.findById(drinkId);
    //         res.status(200).json(getDrink);
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }}
)

router.put("/:id", updateDrink
    // async (req, res) => {
    //     const drinkId = req.params.id;
    //     const newBody = req.body;
    //     try {
    //         const updateDrink = await Drink.findByIdAndUpdate(drinkId, { $set: newBody }, { new: true })
    //         res.status(200).json(updateDrink);
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }}
)

router.delete("/:listId/:id", deleteDrink
    // async (req, res) => {
    //     const drinkId = req.params.id;
    //     try {
    //         await Drink.findByIdAndDelete(drinkId);
    //         res.status(200).json("Success");
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }}
)
router.get("/", getAll);
router.get("/findList/:listId", getListDrinks);

export default router;