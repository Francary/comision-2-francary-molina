import { useContext, useEffect, useRef, useState } from "react"
import Swal from 'sweetalert2'
import { BsFillTrash3Fill , BsPencilFill   } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider.jsx"
import { API_URL } from "../utils/const.js";
import { Link } from "react-router-dom";
import { alertDelete, alertDeleteOk } from "../utils/options.SweetAlert.js";
import { Comments } from "./Comment.jsx";

const Post = ( {postId, title, description, imageURL, createdAt, autor , refresh ,comments, autorId} ) => {
    const ref = useRef(null)
    const { auth } = useContext(AuthContext) 
    // console.log("Hola: " ,auth.user._id);
    // console.log("Chao: ",autorId);
  
    const [ commentList , setCommentList ] = useState([])

    const handleDelete = async (postId) =>{
        return  await fetch(`${API_URL}/post/${postId}`,{
                method:"DELETE",
                headers: {
                    Authorization: auth.token
                }
            })  
        }
       
    const createComment = async (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {
            description: formData.get("description"),
            
        }
        
        fetch(`${API_URL}/comment/${postId}`,{
            method: "POST",
            headers: {
                Authorization: auth.token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            
        })
        .then((res)=> {
            if(res.status !== 201) return alert("Error al Crear Comment")})
        .then(()=>{
            getCommentList() 
            ref.current.reset()
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

   
    const formatoFecha = new Date(createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });

    return (

    <div className="card mb-3 ">
        <div className="row g-0">
            <div className="col-md-3">
                <img src={imageURL} className="img-fluid rounded" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="  card-body">
                    <div className="d-flex align-items-center justify-content-end">
                        <h3 className="card-title">{title}</h3>
                        <p className="text-body-secondary "> {formatoFecha} </p>
                    </div>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small>Autor : {autor}  </small>
                      </p>
                </div>
            
            </div>
            <div className="col-md-1 d-flex align-items-start justify-content-end">
                <Link className={`btn btn-outline-primary btn-sm m-2 ${!auth? "d-none":""}`} to={`/post/${postId}`}>
                {/* <Link className={`btn btn-outline-primary btn-sm m-1 ${!auth? "d-none":""}`} to={`/post/${postId}`}> */}
                    <BsPencilFill/>
                </Link>
                
                <button className={`btn btn-outline-danger btn-sm mt-2 me-2 ${!auth? "d-none":""}`}
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
        
        
        <form className="d-flex m-3 gap-3 " onSubmit={createComment} ref={ref} >
                <input type="text" className="form-control" name="description"  id="description" placeholder="Escribir comentario" />
                <button className="btn btn-success" type="submit" >Comentar</button>
        </form>       
       
        
        <h5 className={`col-md-3 ms-3 mt-2 ${!comments.length? "d-none":""}`}>Comentarios:</h5>
          
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
                        user={comment.autor.username}
                        postId = {postId}
                        commentId={comment._id}
                        />

                    )
                })

            }


        </div>
    </div>
    )
}

export {Post}