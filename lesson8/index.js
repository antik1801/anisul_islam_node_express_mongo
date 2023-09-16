const app = require("./app")
const PORT = 3000


app.get("/", (req,res) =>{
    res.send("<h1>I am a get request at home route</h1>")
    res.end();
})

app.get("/register", (req,res) =>{
    res.send("<h1>I am a get request from register route</h1>")
    res.end()
})

app.get("/login", (req,res)=>{
    res.send("<h1>I am a get request from login route</h1>")
    res.end()
})

app.use((req,res)=>{
    res.send()
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});