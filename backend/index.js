import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"

import { env } from "./src/settings/config.js" 
import { startConnection } from "./src/settings/database.js"
import { commentRouter } from "./src/routes/comment.routes.js"
import { postRouter } from "./src/routes/post.routes.js"
import { userRouter } from "./src/routes/user.routes.js"
import { verifyToken } from "./src/middlewares/verify.token.js"


const app = express()


    // Comunes
app.use(morgan("dev"))
app.use(cors())
app.use(helmet())

    // Para que ande Body
app.use(express.json())

    // Para que ande formulario
app.use(express.urlencoded({extended: false}))


    //Routes
app.use('/comment' , commentRouter)    
app.use('/post' ,verifyToken, postRouter)    
app.use('/user' , userRouter)    
    
app.listen(env.PORT, async () => {
    await startConnection();
    console.log(`Servidor Activo en el Puerto:  ${env.PORT}`);
});
