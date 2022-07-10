import React,{useState,useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";

export const Resetpassword = (props) => {
  const [reset, setreset] = useState(props.state);
  useEffect(() => {
    setreset(props.state);
  }, [props.state]);
    return (
        <div className="formDiv">
          <div className="formOptions">
            <Link className="inactiveSign" onClick={props.clearHandler} style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link>
            <Link className="inactiveSign" onClick={props.clearHandler} style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link>
          </div>
          <form className="formBody">
            <label htmlFor="b9" >Email-id</label>
            <input type="email" id="b9" name='emailId' value ={reset.emailId} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b10" >Current Password</label>
            <input type="password" id="b10" name='password' value ={reset.password} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b11" >Effective Date</label>
            <input type="date" id="b11" name='effdate' value ={reset.effdate} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b12" >New Password</label>
            <input type="password" id="b12" name='npassword' value ={reset.npassword} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b13" >Confirm Password</label>
            <input type="password" id="b13" name='cpassword' value ={reset.cnpassword} onChange={props.inputChangeHandler} required="required"/>
            <button type='submit' name='reset_password' onClick={props.onSaveHandler}>SUBMIT</button>
          </form>
          <Outlet/>
        </div>
      )
}
