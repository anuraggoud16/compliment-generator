import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const dirname_=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(dirname_+"/public/index.html");
});

// custom middleware
// function logger(req,res,next){
//   console.log(req.method +" "+ req.url);
//   next();
// }
// app.use(logger);

app.post("/sattu",(req,res)=>{
  console.log(req.body);
  res.send(req.body.jaffa);
});
app.listen(process.env.PORT || port,()=>{
    console.log("Listening on port number 3000. Sathwika is a Queen");
});