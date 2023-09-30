const express = require('express')
const app = express()
const PORT = 3000;
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req,res) =>{
    const id = req.header('id')
    const name = req.header('name')
    res.send(`<h1> Student id is:${id} and name is: ${name} </h1>`)
})

app.get("/register", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/register", (req,res) =>
{   const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h1>Your Name is ${fullName} and your age is ${age}</h1>`)

})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

