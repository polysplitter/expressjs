'use strict'

const express = require('express')
const helmet = require('helmet')
const app = express()

// make the world a safer place.
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/ajax', (req, res) => {
    console.log(req.body)
    res.json("Test")
})

app.listen(3000)