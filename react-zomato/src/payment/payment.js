import { propTypes } from 'react-bootstrap/esm/Image';
import { useNavigate, useParams } from 'react-router-dom';
import Allnav from '../allnav/allnav';
import './payment.css';
function Payment(){
  const navigate=useNavigate();
    const amount=localStorage.getItem("am^unt/Fo^o^die:>)00>@$508^&");
    return(
        <>
        <Allnav/>
        <h2 id="details">Please enter the following details</h2>
            <div className='payment'>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="xxxx"/>
</div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number</label>
  <input type="tel" className="form-control" id="exampleFormControlInput3" placeholder="0000000000"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Address</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
<div className='pay'>
<h4>Amount to be paid: ₹{amount} </h4>
            
            <div className="mb-3">
  
  <input type="submit" className="form-control" value="Pay" onClick={()=>{
    localStorage.removeItem("am^unt/Fo^o^die:>)00>@$508^&");
    navigate("/");
  }} /></div>
</div>

            

        </>
    )
}
export default Payment;