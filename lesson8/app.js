const express = require("express")
const app = express() // include express into app
const userRouter = require("./routes/users.route")


app.use("/api/user",userRouter);



app.use("/register", (req,res) =>{
    res.statusCode =200
    res.sendFile(__dirname+"/views/register.html")
})

app.use("/login", (req,res) =>{
    // res.cookie("name", "rabeya")
    // res.cookie("age", "30")
    res.clearCookie("name")
    res.clearCookie("age")
    res.end()
})

// http:localhost:3000/

app.get("/", (req,res) =>{
    // res.send("<h1>I am a get request at home route</h1>")
    // res.end();
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html")
})


// http:localhost:3000/errorRoute

app.use((req,res)=>{
    res.send("<h1> 404!!! Not a valid url</h1>")
    
})



module.exports = app;