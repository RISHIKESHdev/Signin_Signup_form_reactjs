import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Resetpassword() {
  return (
    <div className="formDiv">
      <div className="formOptions">
        <Link className="inactiveSign" style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link>
        <Link className="inactiveSign" style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link>
      </div>
      <form className="formBody">
        {/* <label htmlFor="b9" >Email-id</label> */}
        <input type="email" placeholder='Email-id' id="b9" required="required"/>
        {/* <label htmlFor="b8" >Reset Password</label> */}
        <input type="password" placeholder='New Password' id="b10" required="required"/>
        {/* <label htmlFor="b10" >Password Check</label> */}
        <input type="password" placeholder='Confirm Password' id="b11" required="required"/>
        <button>SUBMIT</button>
      </form>
      <Outlet/>
    </div>
  )
}
