const express = require('express')
const {create,read,update} = require('../controller/userController')

const userRouter = express.Router()

userRouter.post('/create',create)
userRouter.get('/read',read)
userRouter.put('/update',update)
module.exports=userRouter