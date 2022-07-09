// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
// import { useState } from 'react';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Landingpage from './components/Landingpage'
import Resetpassword from './components/Resetpassword'
import './App.css';

function App() {
  // const [isSignup,setisSignup]=useState(false)
  // const onSubmit = ()=>{

  // }
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}>
            <Route index path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Resetpassword" element={<Resetpassword />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;