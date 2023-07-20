require('dotenv').config()
const express = require('express')
const app = express()
// import the router
const router = require('./route/userRoute')
// init database
const connectingDb = require('./config/dbconnection')

// call the db
connectingDb()
app.use(express.json())

app.use('/api',router)

app.get('/',(req,res)=>{
    res.send("HEy node api")
})


module.exports=app