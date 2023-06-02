import React from "react"
import { Link } from "react-router-dom"

function Header() {


  return (
    <>
      <div className="p-5 text-center">
        {/* <a href="" className="p-2">Beetcode</a>
        <a href="" className="p-2">Problems</a>
        <a href="" className="p-2">Signup</a>
        <a href="" className="p-2">Login</a> */}
        <Link to="/" className="p-2">Beatcode</Link >
        <Link to="/problems" className="p-2">Problems</Link >
        <Link to="/signup" className="p-2">Signup</Link >
        <Link to="/login" className="p-2">Login</Link >
      </div>
        
    </>
  )
}

export default Header
