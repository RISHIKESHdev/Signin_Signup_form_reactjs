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
        {/* <label htmlFor="b1" >Name</label> */}
        <input type="text" id="b1" placeholder='Name' required="required"/>
        {/* <label htmlFor="b2" >Email-id</label> */}
        <input type="email" id="b2" placeholder='Email-id' required="required"/>
        {/* <label htmlFor="bw" >DOB</label> */}
        <input type="date" id="b3" placeholder='dd-mm-yyyy' required="required"/>
        {/* <label htmlFor="br" >Phone number</label> */}
        <input type="year" id="b4" placeholder='Year' required="required"/>
        {/* <label htmlFor="b3" >Password</label> */}
        <input type="password" id="b5" placeholder='Password' required="required"/>
        {/* <label htmlFor="b4" >Password Check</label> */}
        <input type="password" id="b6" placeholder='Confirm Password' required="required"/>
        <button>SIGN UP</button>
      </form>
      <Outlet/>
    </div>
  )
}
