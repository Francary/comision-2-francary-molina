import { config } from "dotenv";

config() 

const env = {

PORT: process.env.PORT || 3850 ,
MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/",
DATABASE_NAME: process.env.DATABASE_NAME || "foro-Molina",
JWT_SECRET: process.env.JWT_SECRET,

}

export {env}