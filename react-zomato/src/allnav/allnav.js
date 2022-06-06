import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './allnav.css'
import User from '../User/user';
function Allnav(){
    const [accountInfo,setAccountInfo]=useState();
    var x;
    useEffect(()=>{
      x=localStorage.getItem("UserFoodie.com:->)9^@48$0");
      if(x!=undefined || x!=null){
        setAccountInfo(200);
        
      }
    });
    
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
                  {
                    accountInfo==200?(
                      <><h4 onClick={()=>{
                        localStorage.removeItem("UserFoodie.com:->)9^@48$0");
                        setAccountInfo(404);
                        window.location.reload();
                      }}>Logout</h4>
                      <h5>Your Orders</h5></>
                    ):(
                      <>
                      <h4 onClick={()=>{
                        setShow(true);
                        setInfo("Login");
                      }}>Login</h4>
                                      <h5 onClick={()=>{
                        setShow(true);
                        setInfo("Sign-Up");
                      }}>Create Account</h5></>

                    )
                  }
                    
                    
                    </div>

        </div>
        
        </>
    )
}

export default Allnav;