const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("HEy node api")
})

module.exports=app