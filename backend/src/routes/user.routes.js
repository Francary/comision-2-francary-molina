import { Router } from "express";
import { ctrlUserLogin, ctrlUserRegister } from "../controllers/user.controllers.js";
import { validatorLogin, validatorRegister } from "../validations/user.validations.js";
import { verifyValidations } from "../middlewares/verify.validations.js";

const userRouter = Router()

userRouter.post('/register', validatorRegister, verifyValidations, ctrlUserRegister)
userRouter.post('/login', validatorLogin, verifyValidations, ctrlUserLogin)

export {userRouter}