import { errorMessage } from "../errorMessage.js";
import User from "../models/User.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res, next) => {
    const userData = req.body;
    try {
        const duplicateData = await User.findOne({ email: userData.email }) || await User.findOne({ username: userData.username });
        if (duplicateData) return next(errorMessage(501, "the account exists"));
        console.log(duplicateData);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(userData.password, salt);
        const newUser = new User({
            email: userData.email,
            password: hash,
            username: userData.username,
        })
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (error) {
        next(errorMessage(500, "wrong schema", error));
    }
};

export const login = async (req, res, next) => {
    const loginData = req.body;
    try {
        const account = await User.findOne({ username: loginData.account }) || await User.findOne({ email: loginData.account });
        if (!account) return next(errorMessage(502, "account does not exist"));

        const password = await bcrypt.compare(loginData.password, account.password);
        if (!password) return next(errorMessage(503, "wrong account or password"));
        res.status(200).json(`${account.username} login succeessfully`);
    } catch (error) {
        next(errorMessage(500, "Fail to login", error));
    }
};
