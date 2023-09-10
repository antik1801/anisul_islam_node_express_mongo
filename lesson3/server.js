const http = require('http')
const {Agent} = require("http")
const port = 3000;
const hostName = '127.0.0.1'

const myServer = http.createServer((req,res) =>{
    res.end("<h1>Hello , I am your first server</h1>")
})

myServer.listen(port,hostName, ()=>{
    console.log(`Your server is running successfully at http://${hostName}:${port}`)
})



