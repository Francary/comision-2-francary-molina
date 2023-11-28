import  {body ,param} from 'express-validator'
import { isValidObjectId } from 'mongoose';


const validatorCreateComment = [
    body('description')
   .notEmpty().withMessage('El comentario no puede estar vacio')
   .isLength({min:4}).withMessage('Tu comentario debe ser minimo de 4 caracteres')
]

const validatorGetComment = [
    param('commentId')
    .notEmpty().withMessage('Es Obligatorio pasar el parametro Id del Comment')
    .isString().withMessage('El Id debe ser un String')
    .custom(isValidObjectId).withMessage('La  id ingresada no es  valida'),

    param('postId')
    .notEmpty().withMessage('Es Obligatorio pasar el parametro Id del Post')
    .isString().withMessage('El Id debe ser un String')
    .custom(isValidObjectId).withMessage('La  id ingresada no es  valida'),
]

export {
    validatorCreateComment,
    validatorGetComment,
}