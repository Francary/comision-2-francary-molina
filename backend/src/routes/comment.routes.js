import {Router} from "express"
import { ctrlGetComment, ctrlAllComment, ctrlCreateComment, ctrlEditComment, ctrlDeleteComment } from "../controllers/comment.controllers.js"
import { validatorCreateComment, validatorDeleteComment, validatorEditComment, validatorGetComment } from "../validations/comment.validations.js"

const commentRouter = Router()

commentRouter.get('/:postId', ctrlAllComment)
commentRouter.get('/:postId/:commentId',validatorGetComment, ctrlGetComment)
commentRouter.post('/:postId', validatorCreateComment,  ctrlCreateComment)
commentRouter.patch('/:postId/:commentId', validatorEditComment, ctrlEditComment)
commentRouter.delete('/:postId/:commentId', validatorDeleteComment, ctrlDeleteComment)

export {commentRouter}