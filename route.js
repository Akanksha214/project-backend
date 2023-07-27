
const express = require('express')

const userRoute = require('./user/route')
const studentRoute = require('./student/route')

const mainRouter = express.Router()


mainRouter.use('/users', userRoute)
mainRouter.use('/students', studentRoute)


module.exports = mainRouter