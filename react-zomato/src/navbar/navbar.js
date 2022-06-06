import { useState } from 'react';
import Filter from '../Filter/filter';
import './navbar.css'
import User from '../User/user';
function Navbar(){
    const [show,setShow]=useState(false);
  const [info,setInfo]=useState("Login");
  const closeIt=()=>{
    setShow(false);
  }
    return(

        <>
        <User show={show} close={closeIt} info={info}/>
        <div id='homenavbar'>
            <div id="homelogo">
                <h1>e!</h1>
                </div>
                <div id="homeaccount">
                    <h4  onClick={()=>{
      setShow(true);
      setInfo("Login");
    }}>Login</h4>
                    <h5 onClick={()=>{
      setShow(true);
      setInfo("Sign-Up");
    }}>Create Account</h5>
                    </div>

        </div>
        
        </>
    )
}

export default Navbar;