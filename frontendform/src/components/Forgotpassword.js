import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Forgotpassword() {
  return (
    <div className="formDiv">
      <div className="formOptions">
        <Link className="inactiveSign" style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link>
        <Link className="inactiveSign" style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link>
      </div>
      <form className="formBody">
        <input type="email" placeholder='Email-id' id="b13" required="required"/>
        <input type="password" placeholder='New Password' id="b14" required="required"/>
        <input type="password" placeholder='Confirm Password' id="b15" required="required"/>
        <button type='submit'>SUBMIT</button>
      </form>
      <Outlet/>
    </div>
  )
}
