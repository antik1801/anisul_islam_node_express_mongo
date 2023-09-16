

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
