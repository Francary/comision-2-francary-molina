import { useContext } from "react"
import { BsFillTrash3Fill , BsPencilFill   } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider.jsx"
import { Link } from "react-router-dom";

const Post = ( {title, description, imageURL, createdAt} ) => {

    const {auth} = useContext(AuthContext) 
    
    return (

    <div className="card mb-3 ">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={imageURL} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-body-secondary"> 
                         {createdAt} 
                        </small></p>
                </div>
            </div>
            <div className="col-md-1">
                <Link className="btn btn-outline-primary btn-sm m-1"><BsPencilFill/></Link>
                <button className="btn btn-outline-danger btn-sm"><BsFillTrash3Fill /></button> 
            </div>
        </div>
    </div>
    )
}

export {Post}