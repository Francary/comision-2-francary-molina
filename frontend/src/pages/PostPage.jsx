import { useContext, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";
import { Post } from "../components/Post.jsx";
import { API_URL } from "../utils/const.js";

const PostPage = () => {

    const [ postList , setPostList ] = useState([])
    const {auth} = useContext(AuthContext)
    

    useEffect (() => {
        fetch(`${API_URL}/post`)
        .then((res)=> res.json())
        .then((data)=> setPostList(data))
    },[])
    
    return (
   
    <div className="container d-flex flex-column p-3 gap-4 justify-content-center mt-5">
        <h1>POST PAGE</h1>

        <div className="d-flex flex-row gap-4">
                <Link className="btn btn-success" to="/post/newpost">Create</Link>
                <input type="search" name="" id="" placeholder="Search" className="form-control"/>
        </div>
        <div>
            {
                postList.map((post) => {
                    return(
                        <Post
                        key={post._id}
                        title={post.title}
                        imageURL={post.imageURL}
                        description={post.description}
                        createdAt={post.createdAt}

                        />
                    )
                }) 
            }
        </div>        
    </div>

   
)
}

export {PostPage}