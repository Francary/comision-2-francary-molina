
const Post = ( {} ) => {
    return (

        <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={avatar} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-7">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{username}</p>
                <p className="card-text"><small className="text-body-secondary">{musics.length} musics</small></p>
            </div>
            </div>
            <div className="col-md-1">
                
                <button className="btn btn-outline-danger btn-sm"></button>
                
            </div>
        </div>
    </div>
    )
}

export {Post}