import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="formDiv">
      <div className="formOptions">
        <div className=""><Link style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link></div>
        <div className="activeSign">SIGN UP</div>
      </div>
      <form className="formBody">
        {/* <label htmlFor="b1" >Name</label> */}
        <input type="text" id="b1" placeholder='Name' required="required"/>
        {/* <label htmlFor="b2" >Email-id</label> */}
        <input type="email" id="b2" placeholder='Email-id' required="required"/>
        {/* <label htmlFor="bw" >DOB</label> */}
        <input type="date" id="bw" placeholder='Date of birth' required="required"/>
        {/* <label htmlFor="br" >Phone number</label> */}
        <input type="number" id="br" placeholder='Phone number' required="required"/>
        {/* <label htmlFor="b3" >Password</label> */}
        <input type="password" id="b3" placeholder='Password' required="required"/>
        {/* <label htmlFor="b4" >Password Check</label> */}
        <input type="password" id="b4" placeholder='Password check' required="required"/>
        <button>SIGN UP</button>
      </form>
      <Outlet/>
    </div>
  )
}
