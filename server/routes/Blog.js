import express from "express"
import Blog from "../models/Blog.js";
import verifyUser from "../utils/VerifyUser.js";

const router = express.Router();

router.post("/create", verifyUser, async (req, res, next) => {
    try {

        const { _id, email, role } = req.user;

        if (role == "user") return res.status(401).json({
            message: "UnAuthorized User!",
            status: false
        })

        const { title, auther, description, MainPoster, category } = req.body;

        if (!title, !auther, !description, !MainPoster, !category) {

            const createBlog = await Blog.create({
                title,
                description,
                auther: _id,
                MainPoster,
                category
            })
            res.status(201).json({
                success: true,
                message: `${createBlog.title} has been created!`
            })
        }
    } catch (error) {
        next(error);
    }
})

router.get("/All", (req, res, next)=>{
    try {
        
        const { } = req.body;

    } catch (error) {
        next(error);
    }
})

export default router