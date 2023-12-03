import { useContext, useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider.jsx'
import { Spinner } from '../utils/Spinner.jsx'

const PrivateRoutes = () => {

    const { auth } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if ( auth === null) {
            navigate('/user/login')
        }

    
    }, [auth , navigate])
    
    
    if (auth === undefined) return <Spinner/>
    return (
        
        <Outlet/>
        
    )
}

export {PrivateRoutes}