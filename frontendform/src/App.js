import { useState } from 'react';
import './App.css';

function App() {
  const [isSignup,setisSignup]=useState(false)
  return (
    <body>
      <div className="formDiv">
        <div className="formOptions">
          <div className={`${isSignup ? "" :"activeSign"}`} onClick={()=>{setisSignup(false)}}>SIGN IN</div>
          <div className={`${isSignup ? "activeSign" :""}`} onClick={()=>{setisSignup(true)}}>SIGN UP</div>
        </div>
          {(isSignup)?(<>
          <form className="formBody">
            <label htmlFor="b1" >Name</label>
            <input type="text" id="b1" required="required"/>
            <label htmlFor="b2" >Email-id</label>
            <input type="text" id="b2" required="required"/>
            <label htmlFor="b3" >Password</label>
            <input type="text" id="b3" required="required"/>
            <label htmlFor="b4" >Password Check</label>
            <input type="text" id="b4" required="required"/>
            <button>SIGN UP</button>
          </form>
          </>):(<>
            <form className="formBody">
              <label htmlFor="b2" >Email-id</label>
              <input type="text" id="b2" required="required"/>
              <label htmlFor="b3" >Password</label>
              <input type="text" id="b3" required="required"/>
              <button>SIGN IN</button>
            </form>
          </>)}
        </div>
    </body>
  );
}

export default App;
