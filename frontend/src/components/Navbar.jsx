
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider.jsx"

const Navbar = () => {
    const {logout} = useContext(AuthContext)
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
   
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
            <NavLink className="nav-link " aria-current="page" to="/">PRUEBA</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/user/register">REGISTER</NavLink>
        </li>
        <li className="nav-item">
             <NavLink className="nav-link " aria-current="page" to="/user/login">LOGIN</NavLink>
        </li>
      </ul>
    </div>
         <div className="d-flex" role="search">
            <button onClick={logout} className="btn btn-outline-danger btn-sm" type="submit">LOGOUT</button>
        </div>
    </div>
</nav>
    )
}

export {Navbar}