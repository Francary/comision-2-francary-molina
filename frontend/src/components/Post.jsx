import { useContext } from "react"
import Swal from 'sweetalert2'
import { BsFillTrash3Fill , BsPencilFill   } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider.jsx"
import { API_URL } from "../utils/const.js";

const Post = ( {postId, title, description, imageURL, createdAt, autor , refresh} ) => {

    const { auth } = useContext(AuthContext) 
    
    // const userId = post.autor._id
    // console.log("Hola : " , auth.user._id)
    // console.log("Hola : " , auth)

    const handleDelete = async (postId) =>{
        return  await fetch(`${API_URL}/post/${postId}`,{
                method:"DELETE",
                headers: {
                    Authorization: auth.token
                }
            })  
        }

    
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
                <button className="btn btn-outline-primary btn-sm m-1">
                    <BsPencilFill/>
                </button>
                
                <button className={`btn btn-outline-danger btn-sm ${!auth? "d-none":""}`}
                    onClick={() =>{
                        Swal.fire({
                            title: "Quieres eliminar el Post?",
                            text: "Si lo eliminas no se puede recuperar!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#dc3545",
                            cancelButtonColor: "#198754",
                            confirmButtonText: "Eliminar"
                            }).then((result) => {
                            if (result.isConfirmed) {
                                handleDelete(postId)
                                
                                .then((res) => {
                                    if (res.status === 200){
                                        Swal.fire({
                                            title: "Eliminado!",
                                            text: "Post Eliminado Correctamente...",
                                            confirmButtonColor: "#dc3545",
                                            icon: "success"
                                            }); 
                                            refresh()   
                                    } 
                                })
                               
                            }
                            });
                    }
                }
                    >
                    <BsFillTrash3Fill />
                </button> 
            </div>
        </div>
    </div>
    )
}

export {Post}