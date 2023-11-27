import { Router } from "express";
import { ctrlAllPost, ctrlCreatePost, ctrlDeletePost, ctrlEditPost, ctrlGetPost } from "../controllers/post.controllers.js";
import { validatorCreatePost, validatorEditPost } from "../validations/post.validations.js";
import { verifyValidations } from "../middlewares/verify.validations.js";

const postRouter = Router()

postRouter.post('/newpost', validatorCreatePost, verifyValidations ,ctrlCreatePost )
postRouter.get('/', ctrlAllPost)
postRouter.get('/:postId', ctrlGetPost)
postRouter.delete('/:postId', ctrlDeletePost)
postRouter.patch('/:postId', validatorEditPost, verifyValidations, ctrlEditPost)

export {postRouter}