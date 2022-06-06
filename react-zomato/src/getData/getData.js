import axios from "axios";
import { useState } from "react";
function Getdata(props){
    var [resto,Setresto]=useState([]);
    var mealtype=props.mealtype;
    var cuisine=props.cuisine;
    var location=props.location;
    var lcost =props.lcost;
    var hcost=props.hcost;
    var sort=props.sort;
    var page=props.page;
    var dataObject={
        mealtype:mealtype,
       cuisine:cuisine,
     location:location,
     lcost:Number(lcost),
   hcost:Number(hcost),
    sort:Number(sort),
     page:Number(page),

    };
    if(cuisine.length==0){
        delete dataObject["cuisine"];

    }
    else{
        dataObject["cuisine"]=cuisine;
    }
    if(!location){
        delete dataObject["location"];
    }
    else{
        dataObject["location"]=location;
    }
    if((!lcost)&&(!hcost)){
        delete dataObject["lcost"];
        delete dataObject["hcost"];
    }
    else{
        dataObject["lcost"]=lcost;
        dataObject["hcost"]=hcost;
    }
    console.log("dataObject of getdata");
    console.log(dataObject);
    axios({
        method:'POST',
        url:'http://localhost:3200/filter',
        headers:{"Content-Type":"application/json"},
        data:dataObject
    }).then((res)=>{
        console.log("getdata data");
        console.log(res);
    console.log(res.data);}).catch((err)=>{
        console.error(err);
    });
    return(
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}
export default Getdata;