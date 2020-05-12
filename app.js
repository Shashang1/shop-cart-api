var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var bodyParser = require('body-parser')
var cors = require('cors')

var indexRouter = require('./routes/index')
const connect = require('./dbConfig')

var app = express();

connect()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors('*'))

app.use('/api', indexRouter)

module.exports = app
