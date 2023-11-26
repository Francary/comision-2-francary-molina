import {Router} from "express"
import { ctrlComment } from "../controllers/comment.controllers.js"

const commentRouter = Router()

commentRouter.get('/comment', ctrlComment)

export {commentRouter}