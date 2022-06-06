import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/navbar";
import '../Filter/filter.css';
//import '../homepage/homepage.css';
//import axios from 'axios';
import '../Restaurant/card.css';
import '../navbar/navbar.css';
import Endload from "../endLoad/endLoad";
import Loading from "../Loading/loading";
import '../Restaurant/card.css';
import '../home/home.css';
function Frontpage(){
    const navigate=useNavigate();
	const redirectDetail=(event)=>{
		navigate("restaurant/"+event);

	}
	let isRendered=useRef(false);
	var [page,setPage]=useState(1);
	var {e}=useParams();
    const options={
        method:'get',
        headers:{'content-type':'application/json'},
    };
    var [restaurantList,setRestaurants]=useState([]);
    var [location,setLocation]=useState([]);
    const [completed,Setcompleted]=useState(undefined);
    const [l,Setl]=useState(undefined);
    setTimeout(()=>{
        Setl(true);
    },60000);
    var [location,setLocation]=useState();
	var [cuisine,setCuisine]=useState([]);
	 var [lcost,setLcost]=useState(0);
    var [hcost,setHcost]=useState(10000);
    var [cl,setCl]=useState(false);
	var [sort,setSort]=useState(1);
   /* var u="http://localhost:3200/getby/mealtype/q?mealtype="+e;

	useEffect(()=>{
		fetch(u,options)
		.then(res=>res.json())
		.then((result)=>{
			result=result.filter(r=>r.name);
            if(result){
                setRestaurants(result);
                setCl(true);
                Setcompleted(true);

            }
			
            
		});
	},[]);*/
    
    var getUrl=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${cuisine}&lcost=${lcost}&hcost=${hcost}&sort=${sort}&page=${page}`;
    function Callfetch(getUrl,options){
            fetch(getUrl,options).then(res=>res.json()).then((result)=>{
           
            
                if(result){
                    Setcompleted(true);
                    setCl(true);
                    setRestaurants(result);
                    console.log("result= "+JSON.stringify(result));
                    console.log(result);
    
                }
            });

        
       
    

}
if(!completed){
    Callfetch(getUrl,options);
}
    if(!cl){
        console.log("loading....");
    }
    else{
        console.log("Data loaded..");
    }
	function callLocation(e,location,cuisine,lcost,hcost,sort,page){
            getUrl=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${cuisine}&lcost=${lcost}&hcost=${hcost}&sort=${sort}&page=${page}`;
            Callfetch(getUrl,options);
        

    }
	const setLocationChange=(u)=>{
		setLocation(u);
        callLocation(e,location,cuisine,lcost,hcost,sort,page);
	}
    function changeCuisine(cuisine){
            getUrl=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${cuisine}&lcost=${lcost}&hcost=${hcost}&sort=${sort}&page=${page}`;

            Callfetch(getUrl,options);
        

    }
	const setChange=(u)=>{
        setCl(false);
        var y=cuisine.findIndex(r=>r==u);
        console.log(y);
        if(y!=-1){
            cuisine.splice(y,1);
        }
        else{
            cuisine.push(u);
        }
        setCuisine(cuisine);
        console.log(`cuisine=${cuisine}`);
		changeCuisine(e,location,cuisine,lcost,hcost,sort,page);
        
	}
    function callSort(e,location,cuisine,lcost,hcost,sort,page){
            getUrl=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${cuisine}&lcost=${lcost}&hcost=${hcost}&sort=${sort}&page=${page}`;

            Callfetch(getUrl,options);
       

    }
    const setSortChange=(u)=>{
        setSort(u);
        callSort(e,location,cuisine,lcost,hcost,sort,page);
    }
    function callCost(e,location,cuisine,lcost,hcost,sort,page){
            getUrl=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${cuisine}&lcost=${lcost}&hcost=${hcost}&sort=${sort}&page=${page}`;

            Callfetch(getUrl,options);
       
    }
    
    const setCostChange=(l,h)=>{
        setLcost(l);
        setHcost(h);
        callCost(e,location,cuisine,lcost,hcost,sort,page);
        
    }
    
    console.log(getUrl);   
    /*useEffect(()=>{
        fetch(getUrl,options).then((res)=>{
            res.json();
        }).then((result)=>{
            console.log("result");
            console.log(result);
            Setcompleted(true);
            getUrl="http://localhost:3200/get/filterbyquery/query?mealtype="+e;
        }).catch(err=>console.error(err));
    },[]);*/
    
	
    return(
        <>
		
		{!completed ?(
            <>
            {!l?(
                <>
                <Loading/>
                </>
            ):(
                <>
            <Endload/>
            </>)}
            </>
        ):(
            <>
           
             
             
          
        <Navbar/>
		<div id="filterSmall"><h3>Filter</h3> <h3 id="gts"><>&gt;</></h3></div>
        <h1 id="homeintro">Available {e} restaurants</h1>
        <div id="filterandrest">
         <div>
		<div id="filter">
			<h3>Filter</h3>
			<h5>Select location</h5>
			<select onChange={(event)=>setLocationChange(event.target.value)}>
				<option value={"Mumabi"}>Mumbai</option>
				<option value={"Delhi"}>Delhi</option>
				<option value={"Kolkata"}>Kolkata</option>
				<option value={"Chandigarh"}>Chandigarh</option>
				<option value={"Banglore"}>Banglore</option>
				
			</select>
			<br/>
			<h5>Cuisines</h5>
			<input type={"checkbox"} name="cuisine" value={"North"} id="cuisineN" onChange={(event)=>{setChange(event.target.value)}} /><label htmlFor="cuisineN">
			North Indian</label><br />
			<input type={"checkbox"} name="cuisine" value={"South"} id="cuisineS" onChange={(event)=>{setChange(event.target.value)}}/><label htmlFor="cuisineS">
			South Indian</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Chinese"} id="cuisineC" onChange={(event)=>{setChange(event.target.value)}}  /><label htmlFor="cuisineC">
			Chinese</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Street"} id="cuisineT" onChange={(event)=>{setChange(event.target.value)}} /><label htmlFor="cuisineT">
			Street food</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Fast"} id="cuisineF" onChange={(event)=>{setChange(event.target.value)}} /><label htmlFor="cuisineF">
			Fast food</label>
			<br />
			<h5>Cost</h5>
			<input type={"radio"} name="cost" value={"less"} id="less" onChange={()=>{setCostChange(1,500)}} /><label htmlFor="less"> less than <>&#8377;</> 500</label><br/>
			<input type={"radio"} name="cost" value={"ft"} id="ft" onChange={()=>{setCostChange(500,1000)}}/><label htmlFor="ft" > <>&#8377;</> 500 to <>&#8377;</> 1000</label><br/>
			<input type={"radio"} name="cost" value={"tf"} id="tf" onChange={()=>{setCostChange(1000,1500)}}/><label htmlFor="tf">  <>&#8377;</> 1000 to <>&#8377;</> 1500</label><br/>
			<input type={"radio"} name="cost" value={"ftt"} id="ftt"onChange={()=>{setCostChange(1500,2000)}}  /><label htmlFor="ftt">  <>&#8377;</> 1500 to <>&#8377;</> 2000</label><br/>
			<input type={"radio"} name="cost" value={"more"} id="more"onChange={()=>{setCostChange(2000,10000)}}  /><label htmlFor="more"> more than <>&#8377;</> 2000</label><br/>
			<h5>Sort</h5>
			<input type={"radio"} name="sort" value={"low"} id="low" onChange={()=>{setSortChange(1)}} /><label htmlFor="low">low to high</label><br/>
			<input type={"radio"} name="sort" value={"high"} id="high"  onChange={()=>{setSortChange(-1)}}/><label htmlFor="high">high to low</label><br/>
         </div></div>
        <div>
            {restaurantList.length>0 ? restaurantList.map((restaurants)=>{return <a href='' onClick={()=>redirectDetail(restaurants._id)} key={restaurants._id}>
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
					<h5>Cost :</h5></div>
					<div id="cuisInfo">
						<h5>{restaurants.Cuisine.map(i=>i.name+', ')}</h5>
						<h5><>&#8377;</>{restaurants.cost}</h5></div></div>
			</div></a>


            }):<h1>No data found</h1>}
         
     </div>
     </div>
	 
	 
   </>
		)}

        </> 
    )
}
export default Frontpage;