import express from "express";
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

//metodlar: GET POST DELETE UPDATE PATCH
//getposts Veri tabanından postları getiren bir metod olucak.

router.get("/", getPosts);


export default router;

