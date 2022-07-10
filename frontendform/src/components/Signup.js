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
        <label htmlFor="b1" >Name</label>
        <input type="text" id="b1" required="required"/>
        <label htmlFor="b2" >Email-id</label>
        <input type="email" id="b2" required="required"/>
        <label htmlFor="b3" >DOB</label>
        <input type="date" id="b3" required="required"/>
        <label htmlFor="b4" >Phone Number</label>
        <input type="tel" id="b4" required="required"/>
        <label htmlFor="b5" >Password</label>
        <input type="password" id="b5" required="required"/>
        <label htmlFor="b6" >Password Check</label>
        <input type="password" id="b6" required="required"/>
        <button type='submit'>SIGN UP</button>
      </form>
      <Outlet/>
    </div>
  )
}
