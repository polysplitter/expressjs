'use strict'

import express, { static, json, urlencoded } from 'express';
import helmet from 'helmet';
const app = express()

// make the world a safer place.
app.use(helmet())

app.use(static('public'))
app.use(json())
app.use(urlencoded({extended:false}))

app.post('/ajax', (req, res) => {
    console.log(req.body)
    res.json("Test")
})

app.listen(3000)