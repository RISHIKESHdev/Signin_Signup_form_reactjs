import React from 'react'

export default function Signup() {
  return (
    <form className="formBody">
            <label htmlFor="b1" >Name</label>
            <input type="text" id="b1" required="required"/>
            <label htmlFor="b2" >Email-id</label>
            <input type="email" id="b2" required="required"/>
            <label htmlFor="b3" >Password</label>
            <input type="password" id="b3" required="required"/>
            <label htmlFor="b4" >Password Check</label>
            <input type="password" id="b4" required="required"/>
            <button>SIGN UP</button>
    </form>
  )
}
