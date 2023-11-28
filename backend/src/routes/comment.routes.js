import {Router} from "express"
import { ctrlGetComment, ctrlAllComment, ctrlCreateComment, ctrlEditComment, ctrlDeleteComment } from "../controllers/comment.controllers.js"

const commentRouter = Router()

commentRouter.get('/', ctrlAllComment)
commentRouter.get('/:commentId', ctrlGetComment)
commentRouter.post('/:postId', ctrlCreateComment)
commentRouter.patch('/:commentId', ctrlEditComment)
commentRouter.delete('/:postId/:commentId', ctrlDeleteComment)

export {commentRouter}