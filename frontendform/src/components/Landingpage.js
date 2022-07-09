import React,{useState,useEffect} from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Landingpage() {
    const location = useLocation();
    const [pathName, setPathName] = useState(null) ;
    
    useEffect(() => {
        if(location) {
            let tmp = location.pathname.split("/").pop();
            if (tmp.toLowerCase()==="resetpassword"){
                tmp="reset pass"
            }
            if(tmp===""){
                tmp="Landing"
            }
            setPathName(tmp)
        }
    }, [location])
  return (
    <div className='landingpage'>
        <div className='navb'>
            <h2 className='pagename'>{pathName} page</h2>
            <Link className='navbutton' style={{textDecoration: 'none',color:'inherit'}} to="/Signin">login</Link>
        </div>
        <Outlet/>
    </div>
  )
}
