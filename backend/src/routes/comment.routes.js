import {Router} from "express"
import { ctrlGetComment, ctrlAllComment, ctrlCreateComment, ctrlEditComment, ctrlDeleteComment } from "../controllers/comment.controllers.js"

const commentRouter = Router()

commentRouter.get('/:postId', ctrlAllComment)
commentRouter.get('/:postId/:commentId', ctrlGetComment)
commentRouter.post('/:postId', ctrlCreateComment)
commentRouter.patch('/:postId/:commentId', ctrlEditComment)
commentRouter.delete('/:postId/:commentId', ctrlDeleteComment)

export {commentRouter}