var express = require('express')
var app = express()


app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1>')
})

app.listen(8080, ()=>{
    console.log('running at port 8080')
})