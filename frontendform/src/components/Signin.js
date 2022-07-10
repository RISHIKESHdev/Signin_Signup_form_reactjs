import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="formDiv">
      <div className="formOptions">
        <div className="activeSign">SIGN IN</div>
        <Link className="inactiveSign" style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link>
      </div>
      <form className="formBody">
        <input type="email" id="b7" placeholder='Email-id' required="required"/>
        <input type="password" id="b8" placeholder='password' required="required"/>
        <button type='submit'>SIGN IN</button>
        <p><Link style={{textDecoration: 'none',color:'inherit'}} to="/Forgotpassword">Forgot passwaord? </Link>
        or
        <Link style={{textDecoration: 'none',color:'inherit'}} to="/Resetpassword"> Reset passwaord?</Link></p>
      </form>
      <Outlet/>
    </div>
  )
}
