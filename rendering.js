const path = require('path')

const express = require("express")
const helm = require('helmet')
const app = express()

app.use(helm())

// serve up static files.
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res, next) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log('on port 3000')
})