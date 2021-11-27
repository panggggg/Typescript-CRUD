import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
const routes = require('../src/routes/userInfo.route')
import * as userInfoController from '../src/controllers/userInfo.controller'
import bodyParser from 'body-parser'

const app = express()

const port = 8080

mongoose.connect('mongodb://localhost:27017/user-info-ts', () => {
    console.log('connected to database')
})

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send(`Hello World!`)
})

app.use('/', routes)

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})