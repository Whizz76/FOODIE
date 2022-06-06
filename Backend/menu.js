const mongoose=require('mongoose');
const menu=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("menu",menu);