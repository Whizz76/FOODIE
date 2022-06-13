import { useNavigate } from 'react-router-dom';
import './header.css'
import User from '../User/user';
import { useState } from 'react';
import { useEffect } from 'react';
function Header(){
  const [show,setShow]=useState(false);
  const [info,setInfo]=useState("Login");
  const closeIt=()=>{
    setShow(false);
  }
  var x;
  const [accountInfo,setAccountInfo]=useState();
  const navigate=useNavigate();
  const redirect=(e)=>{
    navigate("/nextpage/"+e);
  }
  useEffect(()=>{
    x=localStorage.getItem("UserFoodie.com:->)9^@48$0");
    if(x!=undefined || x!=null){
      setAccountInfo(200);

    }
  });
  /*console.log(cuisine);
  console.log(cost);
  console.log(sort);*/
    return(
    <>
    <User show={show} close={closeIt} info={info}/>
    <div className="row upper">
   <div className="row lo">
    <p className="blank col col-lg-8 col-md-7 col-sm-7" style={{maxWidth:"70%"}}></p>
    {
      accountInfo===200?(
        <><a href="#" id="login" onClick={()=>{
          localStorage.removeItem("UserFoodie.com:->)9^@48$0");
          setAccountInfo(404);
          window.location.reload();
        }} className="col col-lg-2 col-md-2 col-sm-2" style={{maxWidth:"10%"}}>Logout</a>
        <a href="#" id="account"  className="col col-lg-2 col-md-2 col-sm-2" style={{maxWidth:"25%"}}>Your Orders</a>
             </>
      ):(
          <>
          <a href="#" id="login" onClick={()=>{
      setShow(true);
      setInfo("Login");
    }} className="col col-lg-2 col-md-2 col-sm-2" style={{maxWidth:"10%"}}>Login</a>
    <a href="#" id="account"
    onClick={()=>{
      setShow(true);
      setInfo("Sign-Up");
    }} className="col col-lg-2 col-md-2 col-sm-2" style={{maxWidth:"25%"}}> Create Account</a>
          </>
      )
    }
    
  </div>
  <div className="row restlogo"> 
 <span id="restlogo">e!</span></div>
 <p id="tag">Find the best restaurants, cafes, and bars</p></div>
    <div className="head container">
<h1>Quick Searches</h1>
<p id="hi"> Discover restaurants by type of meal</p>
</div>
<div className="xx">
<div className="row boxa xy">
  <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>{
    window.scrollTo(0,0);
    redirect("breakfast")}}>
    <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse2.mm.bing.net/th?id=OIP.EA0H10zDq9MNcJP9koMyoQHaKE&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8" style={{maxWidth:"60%"}} >
    <p className="break">Breakfast</p><br/>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
  </div>
  <div className="row cola col-lg-3 col-md-5 " style={{maxWidth:"70%"}} onClick={()=>{
    window.scrollTo(0,0);
    redirect("lunch")}}>
    <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse2.mm.bing.net/th?id=OIP.Yv_PT_a-NQFLJMhKjR298QHaLH&pid=Api&P=0&w=122&h=183" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8" style={{maxWidth:"60%"}}>
     <p className="break">Lunch</p>
    <p className="sen"> Start your day with exclusive lunch options</p>
  </div>
  </div>
  <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>{
    window.scrollTo(0,0);
    redirect("snacks")}} >
    <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse4.mm.bing.net/th?id=OIP.0JfAey4ygouDjSN-sRgC9wHaLH&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8" id="snacks" style={{maxWidth:"60%"}}>
     <p className="break">Snacks</p>
    <p className="sen"> Start your day with exclusive snacks options</p>
  </div>
  </div>
   <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>{
     window.scrollTo(0,0);
     redirect("dinner")}}>
     <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse1.mm.bing.net/th?id=OIP.uVHVby3WidgE25MJlYBt8AHaLH&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8"  style={{maxWidth:"60%"}}>
     <p className="break">Dinner</p>
    <p className="sen"> Start your day with exclusive dinner options</p>
  </div>
    </div>
{/*</div>
<div className="row boxa">*/}
{/*<div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}>
     <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse1.mm.bing.net/th?id=OIP.uVHVby3WidgE25MJlYBt8AHaLH&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8" style={{maxWidth:"60%"}}>
     <p className="break">Breakfast</p>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
  </div>*/}
  <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>{
    window.scrollTo(0,0);
    redirect("drinks")}}>
    <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse4.mm.bing.net/th?id=OIP.vHjAO1J4wZjPvcsv-6BeHQHaK2&pid=Api&P=0&w=108&h=159" id="image" alt="Food image not loading"/></div>
<div  className="side col-lg-7 col-sm-8 col-md-8"  style={{maxWidth:"60%"}}>
     <p className="break">Drinks</p>
    <p className="sen"> Start your day with exclusive drinks options</p>
  </div>
  </div>
  <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>{
    window.scrollTo(0,0);
    redirect("nightlife")}}  >
    <div className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse3.mm.bing.net/th?id=OIP.m525NWy8cT_-zXz-H7CvFQHaJY&pid=Api&P=0&w=139&h=176" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8"  style={{maxWidth:"60%"}}>
     <p className="break">Nightlife</p>
    <p className="sen"> Start your day with exclusive nightlife options</p>
  </div>
  </div>
  
</div>
</div>
    </>
    );
}
export default Header;