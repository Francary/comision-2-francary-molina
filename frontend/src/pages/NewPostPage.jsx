const NewPostPage = () => {

    const handleSubmint = async (e) =>{
        e.preventDefault()

    }
    return (
        <div className="container-fluid d-flex flex-column justify-content-center aling-items-center mt-5">
            <h1 className="text-center">NEW POST</h1>
            <form className="container d-flex flex-column gap-3 mt-5" onSubmit={handleSubmint}>

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