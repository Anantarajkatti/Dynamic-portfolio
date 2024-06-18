const express=require('express')
const cors= require('cors')

const app=express()
require('dotenv').config();
const dbConfig=require("./config/dbConfig")

const portfolioRoute=require("./routes/portfolioRoute");
app.use(cors())
app.use(express.json());  


app.use("/api/portfolioRoute",portfolioRoute)


const port=process.env.PORT || 5000;

//deployment code june 16/////////////////////////////////////////
// const path=require("path");

// if(process.env.NODE_ENV ==="production")
//     {
//         app.use(express.static(path.join(_dirname,"client/build")));
//         app.get("*",(req,res)=>{
//             res.sendFile(path.join(path.join(_dirname,"client/build/index.html")))
//         })
//     }
////////////////////////////////////////////////

app.listen(port, ()=>{
    console.log(`server running on port number ${port}`)
})         