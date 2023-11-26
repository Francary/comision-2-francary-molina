import {body} from "express-validator"
import { UserModel } from "../models/user.models.js"

const validatorRegister = [
    body('username')
    .notEmpty().withMessage("El Username es un campo Obligatorio")
    .isString().withMessage("El Username deber ser un String")
    .isLength({min:4}).withMessage("El Username debe contener minimo 4 caracteres")
    .custom( async (value) => {
        const user = await UserModel.findOne({username:value })
        if (user) throw new Error( 'El Username ya existe')
        return true
    }),

    body('email')
    .notEmpty().withMessage("El E-mail es un campo Obligatorio")
    .isEmail().withMessage("El formato del E-mail ingresado es invalido")
    .custom( async (value) => {
        const email = await UserModel.findOne(({email:value}))
        if (email) throw new Error('El E-mail ya esta registrado')
        return true
    }),

    body('password')
    .notEmpty().withMessage("El Password es un campo Obligatorio")
    .isLength({min:8}).withMessage("El Password debe contener minimo 8 caracteres"),
        // No logre que andara el Strong tengo que verlo luego para ver que pasa
    // .isStrongPassword({
    //     minLength: 8,
    //     minUppercase: 1,
    //     minLowercase: 1,
    //     minNumbers: 1,
    //     returnScore: false,
    // }).withMessage("El password debe tener minimo 1 letra MAYUSCULA , 1 letra minuscula , 1 numero, con una longitud minima de 8 caracteres")
    
]


export {validatorRegister}