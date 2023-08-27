require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const router = require('./routes/router')
const chronofitRouter = require('./routes/chronofitRouter')
const PORT = process.env.PORT
// const FRONT_PORT = process.env.FRONT_PORT;
// const APP_PORT = process.env.APP_PORT;

const corsOptions = {
    origin: [/\.pellin.eu\/?$/, /^http:\/\/localhost\:\d{4}$/],
    credentials: true,
}

const app = express()
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.set('views', './public/views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(router, chronofitRouter)

app.listen(process.env.PORT, () => {
    console.log(`Started on http://localhost:${PORT}`)
})
