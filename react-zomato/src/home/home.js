import { useEffect, useState } from 'react';
import Card from '../Restaurant/card';
import Navbar from '../navbar/navbar';
import Filter from '../Filter/filter';
import Loading from '../Loading/loading';
import Endload from '../endLoad/endLoad';
import Allnav from '../allnav/allnav';
import './home.css';
import Enterdata from '../data/data';
import { useParams } from 'react-router-dom';
import Pagination from '../pagination/pagination';
//import Homepage from '../homepage/homepage';
function Home(){
    
    var {e}=useParams();
    const itpp=2;
    var [restaurants,setRestaurants]=useState([]);
    var [location,setLocation]=useState([]);
    const [completed,Setcompleted]=useState(undefined);
    const [l,Setl]=useState(undefined);
    var [so,Setso]=useState(1);
    var [le,setL]=useState(0);
    var [h,setH]=useState(10000);
    var [c,setC]=useState([]);
    var [page,setPage]=useState(1);
    var st=itpp*page-2;
    var en=page*2;
    var urll;
    urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=${le}&hcost=${h}&sort=${so}&page=${page}`;
    function sortIt(event){
        let x=event.target.value;
        if(x==="high"){
            Setso(-1);
            urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=${le}&hcost=${h}&sort=-1&page=1`;

        }
        else{
            Setso(1);
            urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=${le}&hcost=${h}&sort=1&page=1`;
        }
        fetch(urll).then((res)=>res.json()).then((result)=>{
            result=result.filter(r=>r.name);
            setRestaurants(result);
        });
    }
    function showIt(event){
        let x=event.target.value;
        let y=c.findIndex(r=>r===x);
        if(y!==-1){
            c.splice(y,1);

        }
        else{
            c.push(x);
        }
        setC(c);
        urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=${le}&hcost=${h}&sort=${so}&page=1`;
        fetch(urll).then((res)=>res.json()).then((result)=>{
            result=result.filter(r=>r.name);
            setRestaurants(result);
        })
    }
    //var restname;
    
    //var [restname,setRestName]= useState([]);
    const options={
        method:'get',
        headers:{'content-type':'application/json'},
    };
        
     var u="http://localhost:3200/getby/mealtype/q?mealtype="+e;

	useEffect(()=>{
		fetch(urll,options)
		.then(res=>res.json())
		.then((result)=>{
			result=result.filter(r=>r.name);
			setRestaurants(result);
            Setcompleted(true);
            
		});
	},[]);
    setTimeout(()=>{
        Setl(true);
    },30000);
   
    function filterRestaurantByLocation(event){
        location=(event.target.value).charAt(0).toUpperCase()+(event.target.value).slice(1);
        if(location=="Select"){
            location="";
            setLocation(location);
            fetch(`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=${le}&hcost=${h}&sort=${so}&page=1`).then((res)=>res.json()).then((result)=>{
                result=result.filter(r=>r.name);
                setRestaurants(result);
            })
        }
        else{
            setLocation(location);
            urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=${le}&hcost=${h}&sort=${so}&page=1`;

            fetch(urll).then((res)=>res.json()).then((result)=>{
                result=result.filter(r=>r.name);
                setRestaurants(result);
             });
       }
       

        }
        //location=location.charAt(0).toUpperCase()+restname.slice(1);
        
    
   
       function costIt(event){
           let x=event.target.value;
           let y=urll.includes("-1");
           if(y){
               if(x==="less"){
                   setL(0);
                   setH(500);
                   urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=0&hcost=500&sort=-1&page=1`;
               }
               else if(x==="ft"){
                   setL(500);
                   setH(1000);
                   urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=500&hcost=1000&sort=-1&page=1`
               }
               else if(x==="tf"){
                   setL(1000);
                   setH(1500);
                   urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=1000&hcost=1500&sort=-1&page=1`
               }
               else if(x==="ftt"){
                    setL(1500);
                    setH(2000);
                   urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=1500&hcost=2000&sort=-1&page=1`
               }
               else if(x==="more"){
                     setH(10000);
                     setL(2000);
                   urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=2000&hcost=10000&sort=-1&page=1`
               }
           }
           else{
            if(x==="less"){
                setL(0);
                setH(500);
                urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=0&hcost=500&sort=1&page=1`;
            }
            else if(x==="ft"){
                setL(500);
                setH(1000);
                urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=500&hcost=1000&sort=1&page=1`
            }
            else if(x==="tf"){
                setL(1000);
                setH(1500);
                urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=1000&hcost=1500&sort=1&page=1`
            }
            else if(x==="ftt"){
                setL(1500);
                setH(2000);
                urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=1500&hcost=2000&sort=1&page=1`
            }
            else if(x==="more"){
                setL(2000);
                setH(10000);
                urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=2000&hcost=10000&sort=-1&page=1`
            } 

           }
           fetch(urll).then((res)=>res.json()).then((result)=>{
               result=result.filter(r=>r.name);
               setRestaurants(result);
           })
       }
         function changePage(event){
             let x=event.target.id;
             setPage(x);
             urll=`http://localhost:3200/get/filterbyquery/query?mealtype=${e}&location=${location}&cuisine=${c}&lcost=${le}&hcost=${h}&sort=${so}&page=${x}`;
             fetch(urll).then((res)=>res.json()).then((result)=>{
                 result=result.filter(r=>r.name);
                 setRestaurants(result);
             })
            }


    return(
        <>
        {!completed ?(
            <>
            {!l?(
                <>
                <Allnav/>
                
                <Loading/>
                </>
            ):(
                <>
            <Endload/>
            </>)}
            </>
        ):(
            <>
            <Allnav/>
            <div id="filterandrest">
           
           <div onChange={()=>{
               setPage(1);
           }} >
               <Filter showLocation={(event)=>filterRestaurantByLocation(event)} showCuisine={(event)=>showIt(event)} showSort={(event)=>sortIt(event)} showCost={(event)=>costIt(event)} />
         </div>
             
           <div>
               <div id="res">
           <h1 id="homeintro">Available {e} restaurants</h1>
            <Card cpage={page} item={restaurants}/></div>
            <h3 id="pageNo">Current Page: {page}</h3>
            <Pagination item={restaurants} print={(event)=>changePage(event)}/>
            </div>
             {/*
                 restaurants.length>0 && restaurants.map(r=>
                     <Card item={r}/>) 
     
                 */}
              
             </div>
            
            {/*<Enterdata change={(event)=>filterRestaurantByLocation(event)}  changeIt={(event)=>filterRestaurantByName(event)} show={(event)=>showIt(event)} sort={(event)=>sortIt(event)} />
                <div>
                    <Homepage item={restaurants}/>*/}
                
           
            </>
        )}
        {/*{!completed ?(
            <>
            <Loading/>
            </>
        ):(
            <>
            <Navbar/>
            <div id="filterandrest">
           
           <div>
               <Filter />
         </div>
             
           <div>
             
             {
                 restaurants.length>0 && restaurants.map(r=>
                     <Card item={r}/>) 
     
             }
             </div>
             </div>
            </>
            )}*/}
        {/*<Navbar/>*/}
        {/*<Enterdata change={(event)=>filterRestaurantByLocation(event)}  changeIt={(event)=>filterRestaurantByName(event)} />*/}
       
        
       {/* <div id="filterandrest">
           
      <div>
          <Filter />
    </div>
        
      <div>
        
        {
            restaurants.length>0 && restaurants.map(r=>
                <Card item={r}/>) 

        }
        </div>
    </div>*/}
      
       
        </>
    );
}
export default Home;