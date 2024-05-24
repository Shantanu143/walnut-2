import jwt from "jsonwebtoken";
import ErrorHandler from "./ErrorHandler.js";

const verifyUser = (req, res, next) => {

    const token = req.cookies.walnut_user;
    if (!token) return ErrorHandler(404, "Bad Request Cookie Not Found!");

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return ErrorHandler(403, "Bad Cookies!");

        req.user = user;
        next();
    })
}

export default verifyUser;