import { useContext } from "react"
import { API_URL } from "../utils/const.js"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { alertCreatePost, alertCreatePostOk } from "../utils/options.SweetAlert.js"

const NewPostPage = () => {
    const navigate = useNavigate()
    const {auth} = useContext(AuthContext)

    const handleSubmint = async (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {
            title : formData.get("title"),
            description: formData.get("description"),
            imageURL: formData.get("imageURL")
        }

        fetch(`${API_URL}/post/newpost`,{
            method: "POST",
            headers: {
                Authorization: auth.token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            
        })
        .then((res)=> {
            if(res.status !== 201){
                Swal.fire(alertCreatePost);
            } else{
                Swal.fire(alertCreatePostOk)
                navigate(`/post`); 
            }})
   
    }
    return (
        <div className="container d-flex flex-column justify-content-center aling-items-center mt-3">
            <h1 className="text-center">NEW POST</h1>
            <form className="d-flex flex-column gap-3 mt-5" onSubmit={handleSubmint}>

                <div className="form-floating">
                    <input type="text" name="title" id="title" className="form-control" placeholder="Titulo del Post"/>
                    <label  htmlFor="title">Titulo del Post</label> 
                </div>

                <div className="form-floating">
                    <input type="text" name="description" id="description" className="form-control" placeholder="Descripcion del Post"/>
                    <label  htmlFor="title">Descripcion del Post</label> 
                </div>

                <div className="form-floating">
                    <input type="text" name="imageURL" id="imageURL" className="form-control" placeholder="Foto del Post"/>
                    <label  htmlFor="title">Foto del Post</label> 
                </div>
                <div>
                    <button className="btn btn-success">Create</button>
                </div>
            </form>       
        </div>
    )
}

export {NewPostPage}