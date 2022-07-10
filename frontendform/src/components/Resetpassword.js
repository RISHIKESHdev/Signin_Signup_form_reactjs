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
        <label htmlFor="b9" >Email-id</label>
        <input type="email" id="b9" required="required"/>
        <label htmlFor="b10" >Current Password</label>
        <input type="password" id="b10" required="required"/>
        <label htmlFor="b11" >Effective Date</label>
        <input type="date" id="b11" required="required"/>
        <label htmlFor="b12" >New Password</label>
        <input type="password" id="b12" required="required"/>
        <label htmlFor="b13" >Confirm Password</label>
        <input type="password" id="b13" required="required"/>
        <button type='submit'>SUBMIT</button>
      </form>
      <Outlet/>
    </div>
  )
}
