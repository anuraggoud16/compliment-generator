import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/sub", async(req,res)=>{
  try{
    if(req.body.name!='')
      {
        const response= await axios.get("https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments");
        res.render("index.ejs",{com: response.data});
      }
    else{
      res.render("index.ejs",{com: "enter the name!!"});
    }
    
  }
  catch(error)
  {
    console.error("Failed");
    send.status(500);
  }
})

app.listen(process.env.PORT || port,()=>{
    console.log("Listening on port number 3000. Sathwika is a Queen");
});