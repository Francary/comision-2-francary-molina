
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider.jsx"

const Navbar = () => {
    const {logout ,auth} = useContext(AuthContext)
  
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
<div className="container">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className={({isActive}) => {
                return isActive? "nav-link active" :"nav-link "
                }}  aria-current="page" to="/">HOME</NavLink>
            </li>
        <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/post">POST</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={`nav-link ${auth? "d-none": "d-block"}`}  aria-current="page" to="/user/register">REGISTER</NavLink>
        </li>
      </ul>
    </div>
         
    <button 
        onClick={auth? logout : ""}
        className={`btn ${auth? "btn btn-danger btn-sm" : "btn btn-success btn-sm"} `}
        type="submit">{auth? "LOGOUT" : <NavLink className="nav-link " aria-current="page" to="/user/login">LOGIN</NavLink>}
    </button>
        
</div>
</nav>
    )
}

export {Navbar}