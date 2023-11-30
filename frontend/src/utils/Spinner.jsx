const Spinner = () =>{
    return(
        <>
            <button className="btn btn-lg btn-primary m-5  gap-5" type="button" disabled>
                <span className="spinner-border text-danger me-2" role="status"></span>
                <span  role="status">Loading...</span>
            </button>
        </>
    )
}

export {Spinner}