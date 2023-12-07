import { Link } from "react-router-dom";
import { BsGithub, BsInstagram} from "react-icons/bs"


const Footer = () => {
    return(
    <footer className=" d-flex flex-wrap justify-content-between align-items-center py-3  border-top bg-body-tertiary" data-bs-theme="dark">
       <div className="container d-flex " >
        <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">2023 Company, Inc</span>
        </div>

        <ul className="nav col-md-8 justify-content-end list-unstyled d-flex">
            <li className="ms-5"><Link className="text-body-secondary" to="https://www.instagram.com/francarymolinapaez/"><BsInstagram /></Link></li>
            <li className="ms-5"><Link className="text-body-secondary" to="https://github.com/Francary/"><BsGithub /></Link></li>  
        </ul>
        </div> 
    </footer>
   
    )
}

export {Footer}