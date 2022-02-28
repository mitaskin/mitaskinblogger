//MongoDB veri tablosunda birer tablo oluşturur.
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    tag: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

//post Model oluşturuyoruz
const Post = mongoose.model("post", postSchema);

export default Post;