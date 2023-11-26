import { Router } from "express";
import { crtlUser } from "../controllers/user.controllers.js";

const userRouter = Router()

userRouter.get('/user', crtlUser)

export {userRouter}