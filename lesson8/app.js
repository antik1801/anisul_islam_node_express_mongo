const express = require("express")
const app = express() // include express into app
const userRouter = require("./routes/users.route")


app.use("/api/user",userRouter);


// http:localhost:3000/

app.get("/", (req,res) =>{
    res.send("<h1>I am a get request at home route</h1>")
    res.end();
})


// http:localhost:3000/errorRoute

app.use((req,res)=>{
    res.send("<h1> 404!!! Not a valid url</h1>")
})



module.exports = app;