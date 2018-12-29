const express = require('express')
const app = express()

function validateUser(req, res, next) {
    res.locals.validated = true
    console.log("Validated Ran!!")
    next()
}

app.use('/admin', validateUser, (res, req, next) => {
    console.log("hi")
    next()
})

app.get('/', (req, res, next) => {
    res.send('<h1>Main Page</h1>')
    console.log(res.locals.validated)
})

app.get('/admin', (req, res, next) => {
    res.send('<h1>Admin Page</h1>')
    console.log(res.locals.validated)
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})
