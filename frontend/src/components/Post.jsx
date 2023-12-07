import { useContext, useEffect, useState } from "react"
import Swal from 'sweetalert2'
import { BsFillTrash3Fill , BsPencilFill   } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider.jsx"
import { API_URL } from "../utils/const.js";
import { Link } from "react-router-dom";
import { alertDelete, alertDeleteOk } from "../utils/options.SweetAlert.js";
import { Comments } from "./Comment.jsx";

const Post = ( {postId, title, description, imageURL, createdAt, autor , refresh} ) => {

    const { auth } = useContext(AuthContext) 
 
    const [ commentList , setCommentList ] = useState([])

    const handleDelete = async (postId) =>{
        return  await fetch(`${API_URL}/post/${postId}`,{
                method:"DELETE",
                headers: {
                    Authorization: auth.token
                }
            })  
        }
  


    const getCommentList = () =>{
     
            fetch(`${API_URL}/comment/${postId}`)
            .then((res)=> res.json())
            .then((data)=> setCommentList(data))
       
    }
    useEffect (() => { 
        getCommentList()
    },[])
    return (

    <div className="card mb-3 ">
        <div className="row g-0">
            <div className="col-md-3">
                <img src={imageURL} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small>Autor : {autor}  </small>
                        <small className="text-body-secondary"> 
                         {createdAt} 
                        </small></p>
                </div>
            </div>
            <div className="col-md-1 ">
                <Link className={`btn btn-outline-primary btn-sm m-1 ${!auth? "d-none":""}`} to={`/post/${postId}`}>
                    <BsPencilFill/>
                </Link>
                
                <button className={`btn btn-outline-danger btn-sm m-1 ${!auth? "d-none":""}`}
                    onClick={() =>{
                        Swal.fire(alertDelete)
                        .then((result) => {
                            if (result.isConfirmed) {
                                handleDelete(postId) 
                                .then((res) => {
                                    if (res.status === 200){
                                        Swal.fire(alertDeleteOk); 
                                        refresh()   
                                    } 
                                })
                            }
                        });
                    }
                }>
                    <BsFillTrash3Fill />
                </button> 
            </div>
        </div>
        <div>
            {
                commentList.map((comment)=>{
                    return(
                        <Comments
                        key={comment._id}
                        description={comment.description}
                        createdAt={comment.createdAt}
                        refresh={getCommentList}
                        imageURL={comment.autor.avatarURL}
                        />

                    )
                })

            }


        </div>
    </div>
    )
}

export {Post}