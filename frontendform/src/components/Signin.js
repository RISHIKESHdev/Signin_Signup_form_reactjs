import React from 'react'

export default function Signin() {
  return (
    <form className="formBody">
              <label htmlFor="b5" >Email-id</label>
              <input type="email" id="b5" required="required"/>
              <label htmlFor="b6" >Password</label>
              <input type="password" id="b6" required="required"/>
              <button>SIGN IN</button>
            </form>
  )
}
