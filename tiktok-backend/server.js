
const express=require("express");
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const app=express();
const port=4000;
const data= require("./data.js");
// const connecttomongoose=require("./dbconnect");
const tiktokVideos=require("./bdmodel.js");

const cors = require('cors');
app.use(cors())


    mongoURI="mongodb://localhost:27017/datavideo";

    // {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true}
    mongoose.connect(mongoURI,()=>{
    console.log("connect to mongo successfully");
    });


// connecttomongoose();

app.use(express.json());

app.get("/",(req,res)=>{
 res.status(200).send("Hallo World");
});

app.get("/data",(req,res)=>{
  tiktokVideos.find({},(err,dtt)=>{
    if(err){
      res.status(200).send("error is here");
    }else{
      res.status(200).json(dtt);
    }
  });
  // res.status(200).json(data);
 });

app.post("/createdata",(req,res)=>{

  const newdata=req.body;

    tiktokVideos.create(newdata,(err,succ)=>{
      if(err){
        res.send("error found");
        console.log("error found",err);
      }
      else{
        res.send("Date created successfully");
        console.log("Date created successfully");
      }
      
    });

   });


app.listen(port,()=>{
 console.log("This is the soution ah...");
});