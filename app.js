require('dotenv').config()
const express = require('express')
const app = express()

// init database
const connectingDb = require('./config/dbconnection')

// call the db
connectingDb()
app.get('/',(req,res)=>{
    res.send("HEy node api")
})

module.exports=app