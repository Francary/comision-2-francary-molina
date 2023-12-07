import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"

const Comments = () =>{
    const { auth } = useContext(AuthContext) 

    return (
    <div>
        <h6>Comentarios:</h6>
        <div className="card m-3">
            <div className="row g-0">
            <div className="col-md-2">
                <p>Imagen Avatar</p>
            </div>
            <div className="col-md-10">
                <p>Hola Comentarios</p>
            </div>
            </div>

        </div>
    </div>
    )
}

export {Comments}