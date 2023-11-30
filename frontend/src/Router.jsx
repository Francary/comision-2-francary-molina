import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage.jsx'
import { Login } from './components/Login.jsx'
import { Register } from './components/Register.jsx'
import { Page404 } from './pages/404Page.jsx'
import { PrivateRoutes } from './components/PrivateRoutes.jsx'
import { PostPage } from './pages/PostPage.jsx'

const Router = ()=>{
    return(
        <Routes>
            <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<HomePage/>}/>

            </Route>
            
            <Route path='/post' element={<PostPage/>}/>
            <Route path='/user/login' element={<Login/>}/>
            <Route path='/user/register' element={<Register/>}/>
            <Route path='*' element={<Page404/>}/>
       </Routes>
    )
}

export {Router}