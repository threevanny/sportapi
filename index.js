const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const cors = require('cors')

const indexRouter = require('./routes/index.routes')
const authRouter = require('./routes/auth.routes')

const app = express()
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(cookieparser())

//database
require('./database')

//routes
app.use(indexRouter)
app.use(authRouter)

//port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))