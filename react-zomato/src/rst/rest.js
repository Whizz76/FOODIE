import { useState } from "react";

function Rest(){
    var [restname,setRestName]=useState();
    function filterRestaurantByName(event){
        console.log(sort);
        console.log(event.target.value);
        restname=(event.target.value).charAt(0).toUpperCase()+(event.target.value).slice(1);
        //restname=restname.charAt(0).toUpperCase()+restname.slice(1);
        console.log(restname);
        setRestName(restname);
    
        fetch("http://localhost:3200/home/query?name="+restname+"&locality="+location+"&mealtype="+e).then(res=>res.json()).then((result)=>{
                result=result.filter(r=>r.name);
               setRestaurants(result);
            });
    }
    return(
        <></>

    )
}