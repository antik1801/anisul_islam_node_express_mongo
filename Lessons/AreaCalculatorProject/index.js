const express = require("express")
const app = express()
const PORT = 5000
const bodyPerser = require("body-parser")

app.use(bodyPerser.json())
app.use(bodyPerser.urlencoded({ extended: false }))



app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get('/circle', (req,res)=>{
    res.sendFile(__dirname+"/circle.html")
})
app.get('/triangle', (req,res)=>{
    res.sendFile(__dirname+"/triangle.html")
})

app.post('/circle', (req,res)=>{
    const radious = req.body.radious;
    const area = Math.PI * radious * radious
    res.send(`<h2>Area of circle is ${area}</h2>`)
})
app.post('/triangle', (req,res)=>{
    const height = req.body.height
    const base = req.body.base
    const area = 0.5 * base * height
    res.send(`<h2>Area of triangle is ${area}</h2>`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
