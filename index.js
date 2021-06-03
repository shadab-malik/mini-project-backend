const express = require('express');
const cors = require("cors");
const app = express();   //yaha kya kiya hai? express ko funtion me convert kiya hia kya?

let data = [
{username: "shadab", email:"shadab@gmail.com"},
{username: "shada", email:"shadasfb@gmail.com"},
{username: "shaab", email:"shadsdfab@gmail.com"},
{username: "shaedab", email:"shaab@gmail.com"},
{username: "shadaeeb", email:"shqqadab@gmail.com"}, //sendind as string because json data are in string format
{username: "shadaasb", email:"shad123ab@gmail.com"},
{username: "shada23b", email:"shadab@eegmail.com"},
{username: "shada11b", email:"shadab1e@gmail.com"},
{username: "shada22b", email:"shadadvdb@gmail.com"},
{username: "shadabggb", email:"shadasdgb@gmail.com"},

];

app.use(cors());
app.use(express.json());//iska use kya hai re bhiya?

const port = 8000;

app.get("/", (req,res) =>{
res.send(data);}
);

app.post( "/adddata", (req,res)=>{
    console.log("dshaklhfaks");
    console.log(req.body);  //ye kyu kiya???????????
    const secretKey = req.body.secretKey;
   if(Number(secretKey)===1234) {
       const newUser = req.body.newUser;
       data.push(newUser);
       res.send(data);
   }else{
       res.status(400).send("user not created")
   }

});



app.listen( port , () =>{
    console.log("I am running babe " + port );
});

// iska use?