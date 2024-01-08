
const express = require('express');
const app = express();

app.use("/", (req, res, next)=>{
    console.log("i'm first here")
    next()
})

app.use("/users", (req, res, next)=>{
    console.log("i'm second")
    res.send('<h1>hello from express</h1>')
})

app.listen(3000)