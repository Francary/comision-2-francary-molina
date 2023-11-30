import { createContext , useEffect, useState } from "react";


const AuthContext = createContext ()

const AuthProvider = ({children}) => {

    const [ auth , setAuth ] = useState(undefined)

    const login = ({user , token}) => {
        setAuth({user , token})
        localStorage.setItem("token", token)
        localStorage.setItem("user" , JSON.stringify(user))
    }

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setAuth(null)
    }

    useEffect(() => {
        setTimeout(() =>{
            const user = JSON.parse(localStorage.getItem("user"))
            const token = localStorage.getItem("token")
    
            if (!user || !token) {
                localStorage.removeItem("user")
                localStorage.removeItem("token")
                setAuth(null);
                return;
            }
            setAuth({user ,token})
        },1000)
    },[])

    return (
    <>
    <AuthContext.Provider value={{auth ,login , logout}}>
        {children}
    </AuthContext.Provider>
    </>)
}

export {AuthProvider ,AuthContext}