const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const usuarios = []
app.use(bodyParser.urlencoded({extended: true}))

app.post("/login-usuario", (req,res) => {
    usuarios.push(req.body)
    console.log(usuarios)
    res.send("<h1> aaaaaauhy </h1>")
})

app.listen(4040)
