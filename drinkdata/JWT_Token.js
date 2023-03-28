import jwt from "jsonwebtoken";
import { errorMessage } from "./errorMessage.js";


const JWT_Token = (req, res, next, callBackFunction) => {
    const token = req.cookies.JWT_token;
    if (!token) return next(errorMessage(503, "Log in first"));

    jwt.verify(token, process.env.JWT, (err, payload) => {
        if (err) return next(errorMessage(503, "Invalid token"));
        req.userData = payload;
        callBackFunction();
    })
};

export const verifyUser = (req, res, next) => {
    JWT_Token(req, res, next, () => {
        const apiUserId = req.params.userId;
        if (req.userData.id == apiUserId || req.userData.isAdmin) {
            next()
        } else {
            next(errorMessage(504, "You don't have authorization"));
        }
    });
};


export const verifyAdmin = (req, res, next) => {
    JWT_Token(req, res, next, () => {
        if (req.userData.isAdmin) {
            next()
        } else {
            next(errorMessage(504, "You are not admin"));
        }
    });
};