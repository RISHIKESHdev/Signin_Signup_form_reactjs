import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Resetpassword() {
  return (
    <div className="formDiv">
      <div className="formOptions">
        <div className="inactiveSign"><Link style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link></div>
        <div className="inactiveSign"><Link style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link></div>
      </div>
      <form className="formBody">
        <label htmlFor="b14" >Email-id</label>
        <input type="email" id="b14" required="required"/>
        <label htmlFor="b15" >Current Password</label>
        <input type="password" id="b15" required="required"/>
        <label htmlFor="b16" >New Password</label>
        <input type="password" id="b16" required="required"/>
        <label htmlFor="b17" >Confirm Password</label>
        <input type="password" id="b17" required="required"/>
        <button type='submit'>SUBMIT</button>
      </form>
      <Outlet/>
    </div>
  )
}
