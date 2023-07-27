import express from 'express';
import {StudentData} from './service'

const studentRouter = express.Router()
const studentData = new StudentData()

studentRouter

.post('/add', studentData.addData.bind(StudentData))
.post('/get', studentData.getData.bind(StudentData))


module.exports = studentRouter