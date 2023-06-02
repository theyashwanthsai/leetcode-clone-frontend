import React from "react"


function Login() {


  return (
    <>
      <div>
        <h1 className="text-center">Login</h1>
        <div className="text-center border-4 p-3 m-5">

        <div className="p-3">
        <label htmlFor="email" className="p-3">Email</label>
        <input type="email"
        name = "email"
        placeholder="Your email here" 
        className="p-3" />
        </div>

        <div className="p-3">
          <label htmlFor="password" className="p-3">Password</label>
          <input type="password" 
          placeholder="*********"
          className="p-3"/>
        </div>

      <div>
        <button className="border-2">Submit</button>
      </div>





        </div>
      </div>
        
    </>
  )
}

export default Login;
