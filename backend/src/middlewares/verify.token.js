import jwt from "jsonwebtoken"
import {UserModel} from "../models/user.models.js"
import { env } from "../settings/config.js";

const verifyToken = async (req , res, next) =>{
  
  try {
    
    const token = req.headers.authorization;
    
    const userId  =  jwt.verify(token , env.JWT_SECRET);
  
    const user = await UserModel.findOne({ _id: userId.id });
    
    
    if (!user) return res.status(401).json({ error: 'Token de Usuario Invalido' });
    
    req.user = user;
    
    next()
  } catch (error) {
    
    res.status(401).json({ error: 'Es necesario el Token de Usuiario' });
  }

}

export {verifyToken}