import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";
import { API_URL } from "../utils/const.js";

const Login = () => {

    const ref = useRef(null)
    const navigate = useNavigate()

    const {login} = useContext(AuthContext)

    const handleSubmit = async (e) =>  {
        e.preventDefault();

        const formData = new FormData (e.target);
        const email = formData.get("email")
        const password = formData.get("password")

        const user = {
            email,
            password,
        }
        const req = await fetch(`${API_URL}/user/login`, {

        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
});
    if(req.status !== 201   ) { 
        ref.current.reset()
        return alert("Error al iniciar secion")
    }
    const res = await req.json()

    login(res)

    ref.current.reset()
    navigate('/')

    }

    return (
        <>
        <form onSubmit={handleSubmit} ref={ref} className="col-sm-3 text-bg-secondary m-auto p-5 rounded-5" action="">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control"  placeholder="name@example.com" name="email"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control"  placeholder="password" name="password"/>
            </div>
            <div className="d-flex gap-5 ">
                <button className="btn btn-primary">Login</button>
                <Link className="btn btn-primary" to="/user/register">Register</Link>
            </div>
        </form>
        </>
    )
}

export {Login}