const http = require("http")
const port = 5000
const hostname = '127.0.0.1'

const myServer = http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text/plain'})
    res.write("Hello")
    res.end();
})

myServer.listen(port, hostname ,()=>{
    console.log(`Server is running successfully at http://${hostname}:${port}`)
})
