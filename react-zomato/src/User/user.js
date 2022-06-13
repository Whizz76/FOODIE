import './user.css';
import {Modal} from 'react-bootstrap'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
function User(props){
  const navigate=useNavigate();
  const reqS=useRef(null);
  const [content,setContent]=useState("All Fields are required");
  const reqL=useRef(null);
  const [signE,setSignE]=useState();
  const [signP,setSignP]=useState();
  const [signC,setSignC]=useState();
  const [loginE,setLoginE]=useState();
  const [loginP,setLoginP]=useState();
  const Login=(e)=>{
    e.preventDefault();
    if(loginE===undefined || loginE==="" || loginP===undefined || loginP===""){
      setContent("Please fill all the required fields");
    }
    else{
      fetch("http://localhost:3200/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          email:`${loginE}`,
          password:`${loginP}`
        })
      }).then(res=>res.json()).then(result=>{
        if(result.msg!==404){
         localStorage.setItem("UserFoodie.com:->)9^@48$0",result.msg);
         window.location.reload();
        }
        else{
          setContent("Email/Password wrong. No account? Create One!");
        }
      }).catch(err=>console.error(err))
    }
  }
  const SignUp=(e)=>{
    e.preventDefault();
    if(signE===undefined || signE==="" || signP===undefined || signP==="" || signC===undefined || signC==="" ){
      alert("Please fill all the required fields");
    }
    else if(EmailValidator.validate(signE)!=true){
      alert("Invalid email-id");
    }
    else if(signP!==signC){
        alert("Both passwords don't match");
      }
      else{
        fetch("http://localhost:3200/signUp",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          email:`${signE}`,
          password:`${signP}`
        })
      }).then(res=>res.json()).then(result=>{
        if(result["msg"].includes("created")){
          navigate("/accountCreated");
        }
      }).catch(err=>alert("some error occurred while creating your account"));
      }
    }
   
    const info=props.info;
    return(
        <Modal show={props.show} onHide={()=>{
          setContent("All Fields are required");
          setLoginE(undefined);
          setLoginP(undefined);
          setSignE(undefined);
          setSignP(undefined);
          setSignC(undefined);
          props.close();
        }}>
            {
                info==="Login"?(
                   <>
                   <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <h2 className='mb-4'>Login</h2>
              <p ref={reqL} id="required">{content}</p>
              <form onChange={()=>{
                reqL.current.style.display="block";
              }}>
              <div className="form-floating mb-3">
  <input onChange={(event)=>{setLoginE(event.target.value)}} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input onChange={(event)=>{setLoginP(event.target.value)}} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
  <label htmlFor="floatingPassword">Password</label>
</div>
<div className='submit'>
<input onClick={(event)=>{Login(event)}} type="submit" value="Login"/></div></form>
            </Modal.Body>
                   </>
                ):(
                    <>
                    <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
            <h2 className='mb-4'>Sign-Up</h2>
            <form onChange={()=>{
                reqS.current.style.display="block";
              }}>
              <p ref={reqS} id="required">All Fields are required</p>
            <div className="form-floating mb-3">
  <input onChange={(event)=>{setSignE(event.target.value)}} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input onChange={(event)=>{setSignP(event.target.value)}} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
  <label htmlFor="floatingPassword">Password</label></div>
  <div className="form-floating mb-3">
  <input onChange={(event)=>{setSignC(event.target.value)}} type="password" className="form-control" id="floatingConfirmPassword" required placeholder="Comfirm Password"/>
  <label htmlFor="floatingConfirmPassword"> Confirm Password</label>
</div>
<div className='submit'>
<input  onClick={(event)=>SignUp(event)} type="submit" value="Sign-Up"/></div></form>
<p id="alreadyAccount">Already have a account? <span>Login</span></p>
            </Modal.Body>
                    </>
                )
            }
        </Modal>
    )
}
export default User;