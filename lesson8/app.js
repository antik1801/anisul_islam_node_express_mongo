const express = require("express")
const app = express() // include express into app
const userRouter = require("./routes/users.route")


app.use("/api/user",userRouter);


app.use("/register", (req,res) =>{
    // res.status(200).json({
    //     "message": "I am register page",
    //     statusCode: 200
    // })
    res.redirect("/login")
})

app.use("/login", (req,res) =>{
    res.send("Hi I am login page")
})

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