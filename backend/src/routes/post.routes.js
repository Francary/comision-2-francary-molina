import { Router } from "express";
import { ctrlPost } from "../controllers/post.controllers.js";

const postRouter = Router()

postRouter.get('/post' , ctrlPost)

export {postRouter}