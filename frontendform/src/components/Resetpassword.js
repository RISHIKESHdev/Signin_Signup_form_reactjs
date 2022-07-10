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
        <input type="email" placeholder='Email-id' id="b9" required="required"/>
        <input type="password" placeholder='Current Password' id="b10" required="required"/>
        <input type="date" id="b3" placeholder='Effective date' required="required"/>
        <input type="password" placeholder='New Password' id="b11" required="required"/>
        <input type="password" placeholder='Confirm Password' id="b12" required="required"/>
        <button type='submit'>SUBMIT</button>
      </form>
      <Outlet/>
    </div>
  )
}
