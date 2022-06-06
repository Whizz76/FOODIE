import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Menumodal from "../Modal/modal";
import Loading from "../Loading/loading";
import './details.css';
import Allnav from "../allnav/allnav";
function Details(){
    
   
    const {id}=useParams();
    
    var [show,setShow]=useState(false);
    const handleChange=()=>{
        setShow(false);
    }
    const overview=useRef(null);
    const contact=useRef(null);
    const [restaurant,setRestaurant]=useState();
    const [bi,Setbi]=useState();
    const [complete,Setcomplete]=useState(undefined);
    const reff=React.useRef(null);
    const refff=React.useRef(null);
    function addClasses(){
        reff.current.classList.add("no");
        refff.current.classList.remove("no");
        overview.current.classList.add("border");
        contact.current.classList.remove("border");
    }
    function removeClasses(){
        reff.current.classList.remove("no");
        refff.current.classList.add("no");
        contact.current.classList.add("border");
        overview.current.classList.remove("border");
    }
    /*const navRef=React.useRef(null);
    const onRemoveClick=(e)=>{
        e.current.classList.remove("no");
    }*/
    
    const options={
        method:'get',
        headers:{'content-type':'application/json'},
    }
    const ur="http://localhost:3200/getbyid/"+id;

    useEffect(()=>{
        fetch(ur,options)
		.then(res=>res.json())
		.then((result)=>{
			setRestaurant(result);
            Setbi(result.thumb);
            Setcomplete(true);
		});

    });
    
    
    return(
        <>
        {!complete ?(
            <>
            <Loading />
            </>
        ):(
            <>
            <Allnav/>
       
       <div id="frimg" style={{backgroundImage:`url(${bi})`}}>
         </div>
         <h1 id="nor">{restaurant? restaurant.name : ''}</h1>
         <div id="oac">
             <h3 ref={overview} className="border" onClick={addClasses}>Overview</h3><h3 ref={contact} onClick={removeClasses} >Contact</h3><div id="change"><button className="placeOrder" onClick={()=>{setShow(true)}}>Place order</button></div>
             <Menumodal restaurant={restaurant.name} show={show} close={handleChange}/></div>
             <hr id="horline"/>
       <div className="ov" ref={refff}>
           <h2>About this place</h2>
           <h3>Cuisine</h3>
           <p>{restaurant?restaurant.Cuisine.map(r=>r.name+','):''}</p>
           {/*<p>{restaurant?restaurant.Cuisine[0].name : ''},{restaurant?restaurant.Cuisine[1].name : ''}</p>*/}
           <h3>Average Cost</h3>
           <p><>&#8377;</>{restaurant ? restaurant.cost : ''} for two people (approx.)</p>
       </div>
       <div className="ov no" ref={reff} >
           <h2>About this place</h2>
           <h3>Address</h3>
           <p id="addr">{restaurant?restaurant.address: ''},India</p>
           <h3 style={{visibility:"hidden"}}>Average Cost</h3>
           <p style={{visibility:"hidden"}}><>&#8377;</>{restaurant ? restaurant.cost : ''} for one person</p>
       
       </div>
       <div className="space"></div>
            </>
            
        )}
       
        </>
    );
}
export default Details;