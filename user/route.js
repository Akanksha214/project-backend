import express from 'express';
import { UserData } from './service';

const userRouter = express.Router()
const userData = new UserData()

userRouter

    .post('/add', userData.addData.bind(UserData))
    .post('/get', userData.getData.bind(UserData))
    .post('/getbyId', userData.getDataById.bind(UserData))
    .post('/update', userData.updateData.bind(UserData))

module.exports = userRouter