import { Router } from "express";
import { ctrlAllPost, ctrlCreatePost, ctrlDeletePost, ctrlEditPost, ctrlGetPost } from "../controllers/post.controllers.js";
import { validatorCreatePost, validatorDeletePost, validatorEditPost } from "../validations/post.validations.js";


const postRouter = Router()

postRouter.post('/newpost', validatorCreatePost, ctrlCreatePost )
postRouter.get('/', ctrlAllPost)
postRouter.get('/:postId', ctrlGetPost)
postRouter.delete('/:postId', validatorDeletePost, ctrlDeletePost)
postRouter.patch('/:postId', validatorEditPost, ctrlEditPost)

export {postRouter}