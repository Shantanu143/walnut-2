import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    auther: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    MainPoster: {
        type: String,
        required: true,
        default: "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
    },
    category: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;