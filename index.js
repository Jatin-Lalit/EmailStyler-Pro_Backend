const express =require("express");
const cors = require('cors');
require('dotenv').config();
const app=express();
const {generate} = require('./router/generate'); 
const {send} = require('./router/send'); 

app.use(express.json());
app.use(cors());


app.use('/generate', generate);
app.use('/send',send)


let port=process.env.PORT

app.listen(port,()=>{
    console.log("Server Running")
})