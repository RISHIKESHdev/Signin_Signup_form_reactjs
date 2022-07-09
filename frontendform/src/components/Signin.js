import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="formDiv">
      <div className="formOptions">
        <div className="activeSign">SIGN IN</div>
        <div><Link style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link></div>
      </div>
      <form className="formBody">
        {/* <label htmlFor="b5" >Email-id</label> */}
        <input type="email" id="b5" placeholder='Email-id' required="required"/>
        {/* <label htmlFor="b6" >Password</label> */}
        <input type="password" id="b6" placeholder='password' required="required"/>
        <button>SIGN IN</button>
        <Link style={{textDecoration: 'none',color:'inherit'}} to="/Resetpassword">Forgot passwaord?</Link>
      </form>
      <Outlet/>
    </div>
  )
}
