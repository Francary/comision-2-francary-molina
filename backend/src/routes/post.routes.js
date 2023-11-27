import { Router } from "express";
import { ctrlAllPost, ctrlCreatePost, ctrlDeletePost, ctrlEditPost, ctrlGetPost } from "../controllers/post.controllers.js";

const postRouter = Router()

postRouter.post('/newpost', ctrlCreatePost )
postRouter.get('/', ctrlAllPost)
postRouter.get('/:postId', ctrlGetPost)
postRouter.delete('/:postId', ctrlDeletePost)
postRouter.patch('/:postId', ctrlEditPost)

export {postRouter}