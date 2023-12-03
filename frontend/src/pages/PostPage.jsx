import { useContext, useState } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";

const PostPage = () => {

    const [ postList , setPostList ] = useState([])
    const { auth } = useContext(AuthContext)
    console.log("Hola" ,auth)
    return (
   
    <div className="container d-flex flex-column p-3 gap-4 justify-content-center mt-5">
        <h1>POST PAGE</h1>

        <div className="d-flex flex-row gap-4">
                <Link className="btn btn-success" to="/post/newpost">Create</Link>
                <input type="search" name="" id="" placeholder="Search" className="form-control"/>
        </div>
    </div>

   
)
}

export {PostPage}