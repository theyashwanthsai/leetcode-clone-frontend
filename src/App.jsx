import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blogs from "./Components/Blogs.jsx"
import Header from "./Components/Header.jsx"
import Login from "./Components/Login.jsx"
import Problems from "./Components/Problems.jsx"
import Signup from "./Components/Signup.jsx"


function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path = "/" element = {<Blogs />} />
    <Route path = "/problems" element = {<Problems/>}/>
    <Route path = "/signup" element = {<Signup/>}/>
    <Route path = "/login" element = {<Login/>}/>
    </Routes>
      
    </BrowserRouter>
    
        
    </>
  )
}

export default App
