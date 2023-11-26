import {validationResult} from "express-validator"

    // Este Middleware es el que toma los resultados para evaluarlo contra las validaciones y devolver los mensajes
    
const verifyValidations = (req, res, next) =>{
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json(errores.array())
    }
    next()
}

export {verifyValidations}