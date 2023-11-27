import {body} from 'express-validator'

const validatorCreatePost = [
    body('title')
    .notEmpty().withMessage('El Title es un campo Obligatorio')
    .isString().withMessage('El Title debe ser un String')
    .isLength({min:4 , max:20}).withMessage('El Title debe tener entre 4 y 20 Caracteres'),

    body('description')
    .notEmpty().withMessage('El Campo Descripcion no puede estar vacio')
    .isString().withMessage('La description debe ser texto no puede ser solo numeros')
    .isLength({min:20}).withMessage('Tu Descripcion es muy simple queremos saber todo lo que hiciste en el viaje'),

    body('imageURL')
    .notEmpty().withMessage('Para poder Publicar un Post debe Completar la URL con tus fotos')
    .isURL().withMessage("URL no es valida")
]

const validatorEditPost = [
    body('title')
    .notEmpty().withMessage('El Title es un campo Obligatorio')
    .isString().withMessage('El Title debe ser un String')
    .isLength({min:4 , max:20}).withMessage('El Title debe tener entre 4 y 20 Caracteres'),

    body('description')
    .notEmpty().withMessage('El Campo Descripcion no puede estar vacio')
    .isString().withMessage('La description debe ser texto no puede ser solo numeros')
    .isLength({min:20}).withMessage('Tu Descripcion es muy simple queremos saber todo lo que hiciste en el viaje'),

    body('imageURL')
    .notEmpty().withMessage('Para poder Publicar un Post debe Completar la URL con tus fotos')
    .isURL().withMessage("URL no es valida")
]


export {
    validatorCreatePost,
    validatorEditPost,

}