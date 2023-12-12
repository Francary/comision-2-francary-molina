import { useContext, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";
import { Post } from "../components/Post.jsx";
import { API_URL } from "../utils/const.js";

const PostPage = () => {

    const [ postList , setPostList ] = useState([])
    const {auth} = useContext(AuthContext)
    const [filter , setFilter ] = useState([])
    const [search , setShearch] = useState("")
    const getPostList = () =>{
     
            fetch(`${API_URL}/post`)
            .then((res)=> res.json())
            .then((data)=> setPostList(data))
       
    }
    useEffect (() => { 
        getPostList()
    },[])

    useEffect (()=>{
        const filtrar = postList.filter((post)=>{
            return post.title.toLowerCase().includes(search.toLowerCase().trim())
        })
        setFilter(filtrar)
    },[postList,search])
    
    return (
   
    <div className="container d-flex flex-column gap-4 justify-content-center mt-3">
        <h1 className="text-center">POST PAGE</h1>

        <div className="d-flex flex-row gap-4">
                <Link className="btn btn-success" to="/post/newpost">Create</Link>
                <input type="search" name="" id="" placeholder="Search" className="form-control"
                onChange={ (e) => setShearch(e.target.value)}
                value={search}
                />
        </div>
        <div>
            {
                filter.map((post) => {
                    return(
                        <Post
                        key={post._id}
                        title={post.title}
                        imageURL={post.imageURL}
                        description={post.description}
                        createdAt={post.createdAt}
                        autor={post.autor.username}
                        avatar={post.autor.avatarURL}
                        postId={post._id}
                        comments={post.comments}
                        autorId ={post.autor._id}
                        refresh= {getPostList}
                        />
                    )
                }) 
            }
        </div>        
    </div>

   
)
}

export {PostPage}