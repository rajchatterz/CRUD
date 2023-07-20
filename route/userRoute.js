const express = require('express')
const {create,read} = require('../controller/userController')

const userRouter = express.Router()

userRouter.post('/create',create)
userRouter.get('/read',read)
module.exports=userRouter