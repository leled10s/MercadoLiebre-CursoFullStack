let express = require('express')
const app = express()
const path = require('path')

const publicPath = path.resolve(__dirname,'public')

const port = process.env.PORT || 3000;

app.use(express.static(publicPath))

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/register", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.post("/register", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.post("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.listen(port, () =>{
    console.log("Servidor corriendo");
})


