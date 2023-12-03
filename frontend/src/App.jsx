import { Router } from "./Routes/Router.jsx"
import { Footer } from "./components/Footer.jsx"
import { Navbar } from "./components/Navbar.jsx"
import React from "react"

const App = () => {


  return (
    <React.Fragment>
        <Navbar/>
        <Router />
        <Footer/>
    </React.Fragment>
  )
}

export  {App}
