import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { BsFillTrash3Fill } from "react-icons/bs"
import { alertDeleteComment, alertDeleteCommentOk } from "../utils/options.SweetAlert.js"
import Swal from "sweetalert2"
import { API_URL } from "../utils/const.js"

const Comments = ({description , imageURL, createdAt, user, commentId, postId, refresh }) =>{
    const { auth } = useContext(AuthContext) 

    const commentDelete = async (postId , commentId) =>{
        return  await fetch(`${API_URL}/comment/${postId}/${commentId}`,{
                method:"DELETE",
                headers: {
                    Authorization: auth.token
                }
            })  
        }

        const formatoFecha = new Date(createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return (
    <div>
        
        <div className="card m-3">
            <div className="row g-0">
            <div className="col-md-2">
            <img src={imageURL} className="rounded-circle avatarComment"  alt="..."/>
            <small>{user}</small>
            </div>
            <div className="col-md-7 d-flex align-items-center">
                <p>{description}</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-end">
                <p className="text-body-secondary">{formatoFecha}</p>
            </div>
            <div className="col-md-1 d-flex align-items-start justify-content-end ">
            <button className={`btn btn-outline-danger btn-sm m-2 ${!auth? "d-none":""}`}
                        onClick={() =>{
                            Swal.fire(alertDeleteComment)
                            .then((result) => {
                                if (result.isConfirmed) {
                                    commentDelete(postId , commentId) 
                                    .then((res) => {
                                        if (res.status === 201){
                                            Swal.fire(alertDeleteCommentOk); 
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
    </div>
    )
}

export {Comments}