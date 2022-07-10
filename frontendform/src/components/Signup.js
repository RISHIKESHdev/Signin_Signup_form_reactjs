import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="formDiv">
      <div className="formOptions">
        <Link className="inactiveSign" style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link>
        <div className="activeSign">SIGN UP</div>
      </div>
      <form className="formBody">
        <input type="text" id="b1" placeholder='Name' required="required"/>
        <input type="email" id="b2" placeholder='Email-id' required="required"/>
        <input type="date" id="b3" placeholder='DOB' required="required"/>
        <input type="year" id="b4" placeholder='Year' required="required"/>
        <input type="password" id="b5" placeholder='Password' required="required"/>
        <input type="password" id="b6" placeholder='Confirm Password' required="required"/>
        <button type='submit'>SIGN UP</button>
      </form>
      <Outlet/>
    </div>
  )
}
