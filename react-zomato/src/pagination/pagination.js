import './pagination.css';
import '../home/home';
import { useState } from 'react';
function Pagination(props){
    const restaurantList=props.item;
    let l=restaurantList.length;
    var [value,setValue]=useState(1);
    let n=2*(value+4);
    
    function increase(){
           if(n<l){
            value=value+1;
            setValue(value);

           }
            

        
        

    }
    function decrease(){
        if(value>1){
            value=value-1;
            setValue(value);
        }

    }
    return(
        <>
        
        <div id="pagination">
            <div className="page"  onClick={decrease}><>&lt;</></div>
            <div className="page" id={`${value}`}  onClick={(event)=>props.print(event)} >{value}</div>
            <div className="page" id={`${value+1}`}  onClick={(event)=>props.print(event)}>{value+1}</div>
            <div className="page" id={`${value+2}`}  onClick={(event)=>props.print(event)}>{value+2}</div>
            <div className="page" id={`${value+3}`}  onClick={(event)=>props.print(event)}>{value+3}</div>
            <div className="page" id={`${value+4}`}  onClick={(event)=>props.print(event)}>{value+4}</div>
            <div className="page"  onClick={increase}  ><>&gt;</></div>
        </div>
        </>
    )
}
export default Pagination;