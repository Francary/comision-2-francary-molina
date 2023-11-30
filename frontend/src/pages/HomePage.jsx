import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { Spinner } from "../utils/Spinner.jsx"


const HomePage = () => {
    const{auth, logout} = useContext(AuthContext)

    // const {auth} = useContext(AuthContext)

    // if(!auth) return <Spinner/>

    return(
        < >
        <div className="container-fluid d-flex flex-column text-center m-5">
        <h1>HOME PAGE</h1>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat accusantium eligendi doloribus? Quia mollitia non iure, atque id repellat, quis saepe autem odit aliquid, ea debitis dignissimos corporis commodi voluptates!</p>
            {/* {auth.user.username} */}
        </div>
        </>
    )
}

export {HomePage}