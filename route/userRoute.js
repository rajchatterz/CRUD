const express = require('express')
const {create,read,update,remove} = require('../controller/userController')

const userRouter = express.Router()

userRouter.post('/create',create)
userRouter.get('/read',read)
userRouter.put('/update',update)
userRouter.delete('/delete',remove)
module.exports=userRouter