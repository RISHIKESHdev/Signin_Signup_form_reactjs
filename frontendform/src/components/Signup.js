import React,{useState,useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";

export const Signup = (props) => {
  const [signup, setsignup] = useState(props.state);
  useEffect(() => {
    setsignup(props.state);
  }, [props.state]);
    return (
        <div className="formDiv">
          <div className="formOptions">
            <Link className="inactiveSign" onClick={props.clearHandler} style={{textDecoration: 'none',color:'inherit'}} to="/Signin">SIGN IN</Link>        
            <div className="activeSign">SIGN UP</div>
          </div>
          <form className="formBody">
            <label htmlFor="b1" >Name</label>
            <input type="text" id="b1" name='name' value={signup.name} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b2" >Email-id</label>
            <input type="email" id="b2" name='emailId' value ={signup.emailId} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b3" >DOB</label>
            <input type="date" id="b3" name='dob' value={signup.dob} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b4" >Phone Number</label>
            <input type="tel" id="b4" name='phonenumber' value={signup.phonenumber} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b5" >Password</label>
            <input type="password" id="b5" name='npassword' value ={signup.npassword} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b6" >Password Check</label>
            <input type="password" id="b6" name='cpassword' value={signup.cpassword} onChange={props.inputChangeHandler} required="required"/>
            <button type='submit' name='signup' onClick={props.onSaveHandler}>SIGN UP</button>
          </form>
          <Outlet/>
        </div>
      )
}
