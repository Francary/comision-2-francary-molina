import  bcrypt  from "bcrypt"
import  jwt  from "jsonwebtoken"
import { UserModel } from "../models/user.models.js"
import {env} from "../settings/config.js"


// Registrar un Usuario Nuevo
const ctrlUserRegister = async (req , res) => {

    try {
        const user = new UserModel(req.body)
        await user.save()

        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error : 'Error al crear usuario'})
    }
}

// Login de un Usuario
const ctrlUserLogin = async (req , res) => {
    try {
        const {email, password} = req.body

        const user = await UserModel.findOne({email})
        if(!user) return res.status(404).json({error: 'El ingresado no esta registrado, registrate te esperamos pronto.'})

        const isMatch = await bcrypt.compare (password, user.password)
        if(!isMatch) return res.status(401).json({error: 'La contraseña ingresada es incorrecta'})

        const token = await jwt.sign({id: user.id} , env.JWT_SECRET)
        res.status(201).json({token, user})


    } catch (error) {
        res.status(500).json({error : 'Al iniciar sesion'})
    }
}

export {
    ctrlUserRegister,
    ctrlUserLogin
}