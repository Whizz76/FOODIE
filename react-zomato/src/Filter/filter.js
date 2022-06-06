import './filter.css';
import { useRef, useState } from 'react';
import Home from '../home/home';

	
function Filter({showLocation,showCuisine,showSort,showCost}){
	
	const changed=()=>{
		reff.current.classList.toggle("ssm");
		
	}
	const reff=useRef(null)
    
    return(
        <>
		<div id="ssf">
        <button onClick={changed} className='dropdown-toggle ssf'>Filter</button>
        </div>

		<div className='none' ref={reff}>
		<div id="filter">
			<h3>Filter</h3>
			<h5>Select location</h5>
			<select onChange={(event)=>showLocation(event)}>
			    <option value={"select"}>Select Location</option>
				<option value={"Mumbai"}>Mumbai</option>
				<option value={"Delhi"}>Delhi</option>
				<option value={"Kolkata"}>Kolkata</option>
				<option value={"Chandigarh"}>Chandigarh</option>
				<option value={"Bangalore"}>Bangalore</option>
				<option value={"Pune"}>Pune</option>
				
			</select>
			<br/>
			
			<h5>Cuisines</h5>
			<div onChange={(event)=>showCuisine(event)} >
			<input type={"checkbox"} name="cuisine" value={"North"} id="cuisineN" /><label htmlFor="cuisineN">
			North Indian</label><br />
			<input type={"checkbox"} name="cuisine" value={"South"} id="cuisineS"/><label htmlFor="cuisineS">
			South Indian</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Chinese"} id="cuisineC"  /><label htmlFor="cuisineC">
			Chinese</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Street"} id="cuisineSt" /><label htmlFor="cuisineSt">
			Street food</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Fast"} id="cuisineF" /><label htmlFor="cuisineF">
			Fast food</label>
			</div>
			<br />
			<h5>Cost</h5>
			<div onChange={(event)=>showCost(event)} >
			<input type={"radio"} name="cost" value={"less"} id="less" /><label htmlFor="less"> less than <>&#8377;</> 500</label><br/>
			<input type={"radio"} name="cost" value={"ft"} id="ft" /><label htmlFor="ft"> <>&#8377;</> 500 to <>&#8377;</> 1000</label><br/>
			<input type={"radio"} name="cost" value={"tf"} id="tf" /><label htmlFor="tf">  <>&#8377;</> 1000 to <>&#8377;</> 1500</label><br/>
			<input type={"radio"} name="cost" value={"ftt"} id="ftt" /><label htmlFor="ftt">  <>&#8377;</> 1500 to <>&#8377;</> 2000</label><br/>
			<input type={"radio"} name="cost" value={"more"} id="more" /><label htmlFor="more"> more than <>&#8377;</> 2000</label></div><br/>
			<h5>Sort</h5>
			<div onChange={(event)=>showSort(event)} >
			<input type={"radio"} name="sort" value={"low"} id="low" /><label htmlFor="low">low to high</label><br/>
			<input type={"radio"} name="sort" value={"high"} id="high"/><label htmlFor="high">high to low</label><br/>
			</div>
         </div>

</div>
	  

        </>

    );
}
export default Filter;
