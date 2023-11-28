import {Router} from "express"
import { ctrlGetComment, ctrlAllComment, ctrlCreateComment, ctrlEditComment, ctrlDeleteComment } from "../controllers/comment.controllers.js"
import { validatorCreateComment, validatorGetComment } from "../validations/comment.validations.js"
import { verifyValidations } from "../middlewares/verify.validations.js"

const commentRouter = Router()

commentRouter.get('/:postId', ctrlAllComment)
commentRouter.get('/:postId/:commentId',validatorGetComment, verifyValidations, ctrlGetComment)
commentRouter.post('/:postId', validatorCreateComment, verifyValidations, ctrlCreateComment)
commentRouter.patch('/:postId/:commentId', ctrlEditComment)
commentRouter.delete('/:postId/:commentId', ctrlDeleteComment)

export {commentRouter}