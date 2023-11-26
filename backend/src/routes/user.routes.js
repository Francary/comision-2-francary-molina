import { Router } from "express";
import { ctrlUserLogin, ctrlUserRegister } from "../controllers/user.controllers.js";

const userRouter = Router()

userRouter.post('/register', ctrlUserRegister)
userRouter.post('/login', ctrlUserLogin)

export {userRouter}