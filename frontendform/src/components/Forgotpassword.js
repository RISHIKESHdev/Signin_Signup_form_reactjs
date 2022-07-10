import React,{useState,useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";

export const Forgotpassword = (props) => {
  const [forgot, setforgot] = useState(props.state);
  useEffect(() => {
    setforgot(props.state);
  }, [props.state]);
    return (
        <div className="formDiv">
          <div className="formOptions">
          <Link className="inactiveSign" onClick={props.clearHandler} style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link>
          <Link className="inactiveSign" onClick={props.clearHandler} style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link>
          </div>
          <form className="formBody">
            <label htmlFor="b14" >Email-id</label>
            <input type="email" id="b14" name='emailId' value ={forgot.emailId} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b15" >New Password</label>
            <input type="password" id="b15" name='npassword' value ={forgot.npassword} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b16" >Confirm Password</label>
            <input type="password" id="b16" name='cpassword' value ={forgot.cnpassword} onChange={props.inputChangeHandler} required="required"/>
            <button type='submit' name='forgot_password' onClick={props.onSaveHandler}>SUBMIT</button>
          </form>
          <Outlet/>
        </div>
      )
}
