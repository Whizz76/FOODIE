
import './card.css'
import {useNavigate} from 'react-router-dom'
import {BrowseRouter,Routes,Route} from "react-router-dom"
import Details from '../restaurantDetails/details'
function Card(props){
	const restaurantList=props.item;
	const l=restaurantList.length;
	const navigate=useNavigate();
	const redirectDetail=(event)=>{
		navigate("restaurant/"+event);

	}
	
    return(
        <><div>
		{restaurantList.length>0 ? restaurantList.map((restaurants)=>{return <a href='' onClick={()=>{
			window.scrollTo(0,0);
			redirectDetail(restaurants._id)}} key={restaurants._id}>
	<div id="restoCard">
		<div id="firstRow">
			<div id="frfp"><img src={restaurants.thumb} alt="food image loading..." />
			</div><div id="address"><h3>{restaurants.name}</h3>
			<h5>{restaurants.address}</h5></div>
			</div>
			<div id="hhr">
			<hr /></div>
			<div id="lastRow">
				<div id="cuis"><h5>Cuisine :</h5>
				<h5 id="cost">Cost :</h5></div>
				<div id="cuisInfo">
					<h5>{restaurants.Cuisine.map(i=>i.name+', ')}</h5>
					<h5><>&#8377;</>{restaurants.cost}</h5></div></div>
		</div></a>


		}):<h1 id="notfound">Nothing to show</h1>}
	 
 </div>
 
        {/*<div className="card menua">
			<div className="row ab">
			<div className="colx col-lg-3 col-sm-3 col-md-3">
		<img src="https://tse4.mm.bing.net/th?id=OIP.nJlJa8mCdDpXUCKRmLX4JAHaE7&pid=Api&P=0&w=252&h=168" id="image1" alt="Food image not loading"/></div>
		<div className="big col-lg-7 col-md-8 col-sm-8">
	<label>{restaurants.name}</label><br/>

	<span className="loco">{restaurants.address}</span></div></div><hr/>
	<div className="row bc"><div className="coly col-lg-3 col-md-4 col-sm-5">
	<span className="cuisines"> Cuisines:</span><br/>
	<span className="cuisines"> Cost</span></div>
<div className="colz col-lg-7 col-md-6 col-sm-6">	
<span className="bakery">{restaurants.Cuisine[0].name}</span><br/>
<span className="costly"><>&#8377;</>{restaurants.cost}</span></div>
	</div></div>*/}
	
	
	
	</>
	);
       

	
}
export default Card;  