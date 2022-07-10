import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Signin} from './components/Signin'
import {Signup} from './components/Signup'
import {Landingpage} from './components/Landingpage'
import {Resetpassword} from './components/Resetpassword'
import {Forgotpassword} from './components/Forgotpassword'
import './App.css';

export const App = () => {
    // const [dbData,setdbData]=useState({
    //   'dbData':[{
    //     'name':'',
    //     'emailId':'',
    //     'dob':'',
    //     'phonenumber':'',
    //     'password':'',
    //     'npassword':'',
    //     'effdate':'',
    //     'islogin':'',
    //     'isAdmin':'',
    //     'adminBy':'',
    //     'isdeleted':'',
    //     'deletedBy':'',
    //     'modifyaccess':'',
    //   }],
    // })
    const [state,setState]=useState({
      'name':'',
      'emailId':'',
      'dob':'',
      'phonenumber':'',
      'password':'',
      'cpassword':'',
      'npassword':'',
      'effdate':'',
      'islogin':false,
      'isAdmin':false,
      'adminBy':'',
      'isdeleted':'',
      'deletedBy':'',
      'formMethod':'',
      'formerror':[{
        'name':'',
        'email':'',
        'dob':'',
        'phonenumber':'',
        'effdate':'',
      }],
    })
    const onSaveHandler = (e) =>{
      e.preventDefault()
      console.log(`submit button for ${e.target.name} activated`)
      console.log("-------------------------------------------------------------------------")
      console.log(state)
    }
    const inputChangeHandler = (e) =>{
      const {name,value,type,id} = e.target;
      const key = parseInt(id[1],10);
      if(key===7 || key===8){
        setState({...state,formMethod:"signin"})
      }
      if(key>=1 || key<=6){
        setState({...state,formMethod:'signup'})
      }
      if(key>=9 || key<=13){
        setState({...state,formMethod:'resetpass'})
      }
      if(key>=14 || key<=16){
        setState({...state,formMethod:'forgotpass'})
      }
      if(name==="name" && type==="text"){
        setState({...state,name:value})
      }
      if(name==="emailId" && type==="email"){
        setState({...state,emailId:value})
      }
      if(name==="password" && type==="password"){
        setState({...state,password:value})
      }
      if(name==='dob' && type ==="date"){
        setState({...state,dob:value})
      }
      if(name==='phonenumber' && type==="tel"){
        setState({...state,phonenumber:value})
      }
      if(name==="npassword" && type==="password"){
        setState({...state,npassword:value})
      }
      if(name==="cpassword" && type==="password"){
        setState({...state,cpassword:value})
      }
      if(name==='effdate' && type==="date"){
        setState({...state,effdate:value})
      }
    }
    const clearHandler = () =>{
      setState({
        'name':'',
        'emailId':'',
        'dob':'',
        'phonenumber':'',
        'password':'',
        'cpassword':'',
        'npassword':'',
        'effdate':'',
        'islogin':false,
        'isAdmin':false,
        'adminBy':'',
        'isdeleted':'',
        'deletedBy':'',
        'formMethod':'',
        'formerror':[{
          'name':'',
          'email':'',
          'dob':'',
          'phonenumber':'',
          'effdate':'',
        }],
      })
    }
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}>
            <Route index path="Signin" element={<Signin state={state} inputChangeHandler={inputChangeHandler} onSaveHandler={onSaveHandler} clearHandler={clearHandler}/>} />
            <Route path="Signup" element={<Signup state={state} inputChangeHandler={inputChangeHandler} onSaveHandler={onSaveHandler} clearHandler={clearHandler}/>}/>
            <Route path="Resetpassword" element={<Resetpassword state={state} inputChangeHandler={inputChangeHandler} onSaveHandler={onSaveHandler}/>} />
            <Route path="Forgotpassword" element={<Forgotpassword state={state} inputChangeHandler={inputChangeHandler} onSaveHandler={onSaveHandler}/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;