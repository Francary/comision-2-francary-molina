import { useContext, useEffect, useState } from "react"
import { API_URL } from "../utils/const.js"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { useNavigate, useParams } from "react-router-dom"

const EditPostPage = () => {
    const navigate = useNavigate()
    const {auth} = useContext(AuthContext)
    const { postId } = useParams();
 
    const [postData, setPostData] = useState({
        title: "",
        description: "",
        imageURL: "",
      });

       useEffect(()  => {
        const getPost = async() =>{
            try {
            const response = await fetch(`${API_URL}/post/${postId}`, {
                    method: "GET",
                    headers: {
                      Authorization: auth.token,
                    },
                  })
            const postDetails = await response.json();
            setPostData({
            title: postDetails.title,
            description: postDetails.description,
            imageURL: postDetails.imageURL,
            });
                    
            } catch (error) {
                
            }
        }
        getPost()
      }, [auth.token, postId])

    const handleSubmint = async (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {
            title : formData.get("title"),
            description: formData.get("description"),
            imageURL: formData.get("imageURL")
        }
        
        fetch(`${API_URL}/post/${postId}`,{
            method: "PATCH",
            headers: {
                Authorization: auth.token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            
        })
        .then((res)=> {
            if(res.status !== 200) return alert("Error al Crear Post")})
        .then(()=>{
                navigate(`/post`)
            })
    }
    return (
        <div className="container d-flex flex-column justify-content-center aling-items-center mt-5">
            <h1 className="text-center">EDIT POST</h1>
            <form className="d-flex flex-column gap-3 mt-5" onSubmit={handleSubmint}>

                <div className="form-floating">
                    <input type="text" name="title" id="title" className="form-control" placeholder="Titulo del Post" value={postData.title}/>
                    <label  htmlFor="title">Titulo del Post</label> 
                </div>

                <div className="form-floating">
                    <input type="text" name="description" id="description" className="form-control" placeholder="Descripcion del Post" value={postData.description}/>
                    <label  htmlFor="description">Descripcion del Post</label> 
                </div>

                <div className="form-floating">
                    <input type="text" name="imageURL" id="imageURL" className="form-control" placeholder="Foto del Post" value={postData.imageURL}/>
                    <label  htmlFor="imageURL">Foto del Post</label> 
                </div>
                <div>
                    <button className="btn btn-success">Actualizar</button>
                </div>
            </form>       
        </div>
    )
}

export {EditPostPage}