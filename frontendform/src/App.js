import { useState } from 'react';
import Signin from './components/Signin'
import Signup from './components/Signup'
import './App.css';

function App() {
  const [isSignup,setisSignup]=useState(false)
  const [formData,setformData]=useState({signin:{name:"",email:"",password:""},signup:[{name:"",email:"",password:"",passwordCheck:""}]})
  return (
    <body>
      <div className="formDiv">
        <div className="formOptions">
          <div className={`${isSignup ? "" :"activeSign"}`} onClick={()=>{setisSignup(false)}}>SIGN IN</div>
          <div className={`${isSignup ? "activeSign" :""}`} onClick={()=>{setisSignup(true)}}>SIGN UP</div>
        </div>
          {(isSignup)?(<>  
            <Signup/>
          </>):(<>
            <Signin/>
          </>)}
        </div>
    </body>
  );
}

export default App;