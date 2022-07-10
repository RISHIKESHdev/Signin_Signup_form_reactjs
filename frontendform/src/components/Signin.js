import React,{useState,useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";

export const Signin = (props) => {
  const [signin, setsignin] = useState(props.state);
  useEffect(() => {
    setsignin(props.state);
  }, [props.state]);
    return (
        <div className="formDiv">
          <div className="formOptions">
            <div className="activeSign">SIGN IN</div>
            <Link className="inactiveSign" onClick={props.clearHandler} style={{textDecoration: 'none',color:'inherit'}} to="/Signup">SIGN UP</Link>
          </div>
          <form className="formBody">
            <label htmlFor="b7" >Email-id</label>
            <input type="email" id="b7" name='emailId' value ={signin.emailId} onChange={props.inputChangeHandler} required="required"/>
            <label htmlFor="b8" >Password</label>
            <input type="password" id="b8" name='password' value ={signin.password} onChange={props.inputChangeHandler} required="required"/>
            <button type='submit' name='signin' onClick={props.onSaveHandler}>SIGN IN</button>
            <p><Link onClick={props.clearHandler} style={{textDecoration: 'none',color:'inherit'}} to="/Forgotpassword">Forgot passwaord? </Link>
            or
            <Link onClick={props.clearHandler} style={{textDecoration: 'none',color:'inherit'}} to="/Resetpassword"> Reset passwaord?</Link></p>
          </form>
          <Outlet/>
        </div>
      )
}
