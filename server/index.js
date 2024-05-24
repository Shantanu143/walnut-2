import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import User from "./routes/User.js"
import Blog from "./routes/Blog.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

try {
    mongoose.connect(MONGO_URL);
    console.log("Database is connected");
} catch (error) {
    console.log("Database connectivity error!");
}

app.get("/", (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: "Server is Working!"
    })
})

app.use("/api/user", User)
app.use("/api/blog", Blog)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 400;
    let message = err.message || "Internal server error!";

    if (err.code === 11000) {
        message = "Aready Exist!"
    }

    return {
        success: false,
        statusCode,
        message
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} . . . `);
})

// authore date title images freture_img author content commentbox category *recent post