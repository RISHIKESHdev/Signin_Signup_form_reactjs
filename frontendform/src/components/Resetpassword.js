import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Resetpassword() {
  return (
    <div className="formDiv">
      <div className="formOptions">
        <div className="activeSign"><Link style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link></div>
        <div className="activeSign"><Link style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link></div>
      </div>
      <form className="formBody">
        <label htmlFor="b7" >Email-id</label>
        <input type="email" id="b7" required="required"/>
        <label htmlFor="b8" >Reset Password</label>
        <input type="password" id="b8" required="required"/>
        <label htmlFor="b9" >Password Check</label>
        <input type="password" id="b9" required="required"/>
        <button>SUBMIT</button>
      </form>
      <Outlet/>
    </div>
  )
}
