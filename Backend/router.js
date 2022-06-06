const express= require('express');
const app= express();
const uri=require('./path.js');
//import {ObjectId} from "bson";
const cors=require('cors');
//const ObjectId=require('mongodb').ObjectID;
//var objectId= new ObjectId();
const url= require('url');
const login=require('./login.js');
const menu=require('./menu.js');
app.use(express.json());
app.use(cors());
const Restaurants=require('./model.js');
const mongoose=require('mongoose');
const {filterRestaurant,add,filterByQuery}=require('./controller.js');
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(client=>{
    app.listen(3200,()=>{
        console.log("Server and database connected");
    });
}).catch(err=>{
    console.log(err);
})
//Adding Menu Items
app.post('/addMenuItems',(req,res)=>{
    menu.create({name:req.body.name,cost:req.body.cost,image:req.body.image}).then(result=>res.send("item added")).catch(err=>console.error(err))
})
// get all menu items
app.get('/getAllMenuItems',(req,res)=>{
    menu.find({}).then(result=>res.json(result)).catch(err=>console.error(err));
})
//Login
app.post('/login',(req,res)=>{
    login.findOne({email:req.body.email,password:req.body.password}).then(result=>{
        if(result){
            res.json({msg:result.email});
        }
        else{
            res.json({msg:404});
        }
        
    }).catch(err=>console.error(err));
});
//Sign Up
app.post('/signUp',(req,res)=>{
    login.findOne({email:req.body.email}).then(result=>{
        if(result){
           res.json({msg:"already exists"});
        }
        else{
            login.create({email:req.body.email,password:req.body.password}).then(result=>res.json({msg:"account created"})).catch(err=>console.error(err));
        }
    }).catch(err=>console.error(err));
    })
app.get('/getRes',(req,res)=>{
    Restaurants.find({}).then(result=>res.status(200).json(result)).catch(err=>console.error(err));
})
app.get('/getbyid/:id',(req,res)=>{
    //const id=new BSON.ObjectId(req.params.id);
    const id= mongoose.Types.ObjectId(req.params.id);
    Restaurants.findOne({_id:id}).then((result)=>{res.status(200).json(result);
    }).catch((err)=>{console.err(err)});
})
app.get('/detail/:name',(req,res)=>{
    Restaurants.find({name:{$regex:req.params.name}}).then(result=>res.json(result)).catch(err=>{
        console.error(err);
    })
    
})
app.get('/getby/mealtype/q',(req,res)=>{
    const q=url.parse(req.url,true).query;
    Restaurants.find({"type.name":{$regex:q.mealtype}}).then(result=>res.status(200).json(result)).catch(err=>console.error(err));
})
app.get('/restaurant/location/:locality',(req,res)=>{
    const locality=req.params.locality;
    Restaurants.find({city_name:{$regex:locality}}).then((result)=>res.status(200).json(result)).catch(err=>console.error(err));
})
app.get('/home/query',(req,res)=>{
    const queryObject=url.parse(req.url,true).query;
    Restaurants.find({name:{$regex:queryObject.name, $options:'i'},city_name:{$regex:queryObject.locality, $options:'i'},"type.name":{$regex:queryObject.mealtype}}).then(result=>res.json(result)).catch(err=>{
        console.error(err);
    })
})

//app.post('/add',add);
app.post('/filter',filterRestaurant);
app.post('/add',(req,res)=>{
    Restaurants.create(req.body).then(result=>res.status(200).send("Data added")).catch(err=>console.error(err));
})
app.delete('/delete/:id',(req,res)=>{
    let id=mongoose.Types.ObjectId(req.params.id);
    Restaurants.findByIdAndDelete({_id:id}).then((res)=>{
        console.log("item deleted");
    }).catch(err=>{
        console.error(err);
    })
});

app.get('/get/filterbyquery/query',filterByQuery);

//Login

// Sign-Up
