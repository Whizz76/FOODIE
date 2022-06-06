import { useEffect, useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Payment from '../payment/payment';
import './modal.css';
function  Menumodal(props){
    const navigate=useNavigate();
    const [amount,setAmount]=useState(0);
    const [menus,setMenus]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3200/getAllMenuItems",{
            method:"GET",
            headers:{"content-type":"application/json"}
        }).then(res=>res.json()).then(result=>setMenus(result)).catch(err=>console.error(err));

    },[])
    return(
        <>
        <Modal show={props.show} onHide={()=>{setAmount(0);props.close()}}>
            <Modal.Header closeButton>
                <Modal.Title>
                   {props.restaurant} Menu
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
              <div>
                  {
                      menus.map(r=>{return(
                          
                          <div className='item' key={menus.indexOf(r)}>
                              <div className='menuInfo'>
                                  <h3>{r.name}</h3>
                              <h5>Buy the delicious {r.name} exclusively at 
                              <>&nbsp;</>Cost<>&nbsp;</>:<>&nbsp;</>₹<>&nbsp;</>{r.cost} <>&nbsp;</></h5></div>
                              <div className='menuImage'>
                                  <img src={r.image} alt="loading"/>
                                  <div className='amount'>
                                      <span  className='values removing'onClick={(event)=>{
                                          var value=Number(event.target.nextSibling.innerText);
                                          if(value>0){
                                            event.target.nextSibling.innerText=Number(event.target.nextSibling.innerText)-1;
                                            var str=event.target.parentElement.parentElement.previousSibling.children[1].innerText;
                                            var cost=Number(str.slice(str.indexOf("₹")+2));
                                            setAmount(amount-cost);
                                          }
                                
                                          
                                      }}>-</span>
                                      <span className='amounted'>0</span>
                                      <span  className="values adding" onClick={(event)=>{
                                          event.target.previousSibling.innerText=Number(event.target.previousSibling.innerText)+1;
                                          var str=event.target.parentElement.parentElement.previousSibling.children[1].innerText;
                                          var cost=Number(str.slice(str.indexOf("₹")+2));
                                          setAmount(amount+cost);
                                          
                                      }}>+</span>
                                  </div>
                              </div>
                          </div>
                          
                      )})
                  }
              </div>
            </Modal.Body>
            <Modal.Footer>
             <h2>Subtotal: ₹{amount}</h2>
             <button onClick={()=>{
                 navigate(`/paymentDetails/amount=/${amount}`);
             }} >Proceed to Pay</button>
             
            </Modal.Footer>
            
        </Modal>
        </>
    )
}
export default Menumodal;