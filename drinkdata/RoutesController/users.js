import User from "../models/User.js";
import { errorMessage } from "../errorMessage.js";

export const getUser = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        next(errorMessage(500, "wrong ID", error));
    }
};

export const updateUser = async (req, res, next) => {
    const userId = req.params.userId;
    const updateBody = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, { $set: updateBody }, { new: true });
        res.status(200).json(user);
    } catch (error) {
        next(errorMessage(500, "wrong ID", error));
    }
};

export const deleteUser = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        await User.findByIdAndDelete(userId);
        res.status(200).json("Succeess");
    } catch (error) {
        next(errorMessage(500, "wrong ID", error));
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const allUser = await User.find();
        res.status(200).json(allUser);
    } catch (error) {
        next(errorMessage(500, "fail", error));
    }
}