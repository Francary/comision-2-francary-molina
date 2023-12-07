import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { BsFillTrash3Fill } from "react-icons/bs"

const Comments = ({description , imageURL, createdAt }) =>{
    const { auth } = useContext(AuthContext) 

    return (
    <div>
        <h6>Comentarios:</h6>
        <div className="card m-3">
            <div className="row g-0">
            <div className="col-md-2">
            <img src={imageURL} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-7">
                <p>{description}</p>
            </div>
            <div className="col-md-2">
                <p>{createdAt}</p>
            </div>
            <div className="col-md-1">
            <button className={`btn btn-outline-danger btn-sm m-1 ${!auth? "d-none":""}`}>
                <BsFillTrash3Fill />
                </button>
            </div>
            </div>

        </div>
    </div>
    )
}

export {Comments}