const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true})) 

const users = [
    {
        name: "Gazi Ehsanul Haque",
        age: 28
    },
    {
        name: "Amit Shikder",
        age: 25
    }
]

const htmlForm = `
<form method="POST" action="/users">
    <input type="text" name="name" placeholder="Enter name here"/>
    <input type="number" name="age" placeholder="Enter age here"/>
    <button type="submit">Save user</button>
</form>
`

app.get("/users", (req,res)=>{
    res.send(htmlForm)
})

app.post("/users", (req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const user ={
        name,age
    }
    users.push(user)
    res.status(200).json({
        message: "User added successfully",
        status: 200,
        users
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})