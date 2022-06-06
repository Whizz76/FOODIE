const restaurants= require('./model.js');
const url=require('url');
async function filterRestaurant(req,res){
    let{mealtype,cuisine,location,lcost,hcost,page,sort}=req.body;
    page=page?page:1;
    sort=sort?sort:1;
    let pay={}; 
    const itpp=2;
    let st=itpp*page-itpp;
    let en=itpp*page;
  
    

    if(mealtype){
        pay["type.name"]=mealtype;
    }
    if(mealtype && location){
        pay["type.name"]=mealtype;
        pay['city_name']=location;
    }
    if(mealtype && cuisine){
        pay['type.name']=mealtype;
        pay['Cuisine.name']={$regex:regex};
        //pay['Cuisine.name']=cuisine;
    }
    if(mealtype && lcost && hcost){
        pay['type.name']=mealtype;
        pay['cost']={$lte:hcost,$gte:lcost};
    }
    if(mealtype && location && cuisine){
        pay["type.name"]=mealtype;
        pay['city_name']=location;
        pay['Cuisine.name']={$regex:regex};
        //pay['Cuisine.name']=cuisine;
    }
    if(mealtype && location && lcost && hcost){
        pay["type.name"]=mealtype;
        pay['city_name']=location;
        //pay['Cuisine.name']={$regex:regex};
        pay['cost']={$lte:hcost,$gte:lcost};
    }
    if(lcost==0){
        if(mealtype && cuisine && hcost){
            pay["type.name"]=mealtype;
            //pay['city_name']=location;
            pay['Cuisine.name']={ $in: cuisine};
            //pay['Cuisine.name']=cuisine;
            pay['cost']={ $lte: hcost, $gte: lcost};
        }
    }
    else{
        if(mealtype && cuisine && lcost && hcost){
            pay["type.name"]=mealtype;
            //pay['city_name']=location;
            pay['Cuisine.name']={ $in: cuisine};
            //pay['Cuisine.name']=cuisine;
            pay['cost']={ $lte: hcost, $gte: lcost};
        } 
    }
   
    if(mealtype && location && cuisine && lcost && hcost){
        pay["type.name"]=mealtype;
        pay['city_name']=location;
        pay['Cuisine.name']={$regex:regex};
        //pay['Cuisine.name']=cuisine;
        pay['cost']={$lte:hcost,$gte:lcost};
    }
    restaurants.find(pay).sort({cost:sort})
    .then(response=>{
        const filterResponse=response.slice(st,en);
        res.status(200).json(filterResponse);
    }).catch(err=>{
        res.status(500).send({error:err});
       
    })

}
async function filterByQuery(req,res){
    let q=url.parse(req.url,true).query;
    let mealtype=q.mealtype;
    let cuisine=q.cuisine;
    let arr=cuisine.includes(',');
    let regex;
    if(cuisine && arr){
        regex=(cuisine.split(',')).join('|');
        
    }
    else{
        regex=cuisine;
    }
    let location=q.location;
    let lcost=q.lcost;
    let hcost=q.hcost;
    let sort=q.sort;
    let page=q.page;
    page=page?page:1;
    sort=sort?sort:1;
    let pay={}; 
    const itpp=2;
    let st=itpp*page-itpp;
    let en=itpp*page;
  
    

    if(mealtype){
        pay["type.name"]=mealtype;
    }
    if(mealtype && location && location!="undefined"){
        pay["type.name"]=mealtype;
        pay['city_name']=location;
    }
    if(mealtype && cuisine && cuisine!="undefined"){
        pay['type.name']=mealtype;
        pay['Cuisine.name']={$regex:regex};
        //pay['Cuisine.name']=cuisine;
    }
    if(mealtype && lcost && hcost){
        pay['type.name']=mealtype;
        pay['cost']={$lte:hcost,$gte:lcost};
    }
    if(mealtype && location && cuisine && location!="undefined" && cuisine!="undefined"){
        pay["type.name"]=mealtype;
        pay['city_name']=location;
        pay['Cuisine.name']={$regex:regex};
        //pay['Cuisine.name']=cuisine;
    }
    if(mealtype && location && lcost && hcost && location!="undefined" ){
        pay["type.name"]=mealtype;
        pay['city_name']=location;
        //pay['Cuisine.name']={$regex:regex};
        pay['cost']={$lte:hcost,$gte:lcost};
    }
    if(lcost==0){
        if(mealtype && cuisine && hcost && cuisine!="undefined" ){
            pay["type.name"]=mealtype;
            //pay['city_name']=location;
            pay['Cuisine.name']={$regex:regex};
            //pay['Cuisine.name']=cuisine;
            pay['cost']={ $lte: hcost, $gte: lcost};
        }
    }
    else{
        if(mealtype && cuisine && lcost && hcost && cuisine!="undefined"){
            pay["type.name"]=mealtype;
            //pay['city_name']=location;
            pay['Cuisine.name']={$regex:regex};
            //pay['Cuisine.name']=cuisine;
            pay['cost']={ $lte: hcost, $gte: lcost};
        } 
    }
   
    if(mealtype && location && cuisine && lcost && hcost && cuisine!="undefined" && location!="undefined"){
        pay["type.name"]=mealtype;
        pay['city_name']=location;
        pay['Cuisine.name']={$regex:regex};
        //pay['Cuisine.name']=cuisine;
        pay['cost']={$lte:hcost,$gte:lcost};
    }
    restaurants.find(pay).sort({cost:sort})
    .then(response=>{
        const filterResponse=response.slice(st,en);
        res.status(200).json(filterResponse);
    }).catch(err=>{
        res.status(500).send({error:err});
       
    })

}
    


function add(){
    for(let i=0;i<10;i++){
        restaurants.create(data[0]);
    }
}
module.exports={filterRestaurant,add,filterByQuery};
