import { useContext, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";
import { Post } from "../components/Post.jsx";
import { API_URL } from "../utils/const.js";

const PostPage = () => {

    const [ postList , setPostList ] = useState([])
    

    useEffect (() => {
        fetch(`${API_URL}/post`)
        .then((res)=> res.json())
        .then((data)=> setPostList(data))
    },[])
    console.log(postList)
    return (
   
    <div className="container d-flex flex-column p-3 gap-4 justify-content-center mt-5">
        <h1>POST PAGE</h1>

        <div className="d-flex flex-row gap-4">
                <Link className="btn btn-success" to="/post/newpost">Create</Link>
                <input type="search" name="" id="" placeholder="Search" className="form-control"/>
        </div>
        <Post 
        title={"Probando"}
        description={"Aqui vamos"}
        imageURL={"https://cdn.pixabay.com/photo/2023/11/24/20/17/bosnia-8410601_640.jpg"}
        createdAt={"esta fecha"}
        />
        
    </div>

   
)
}

export {PostPage}