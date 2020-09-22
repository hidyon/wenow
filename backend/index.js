// express
const express = require('express')
const app = express()

// 各種設定ファイル
require('dotenv').config()

// mongo DB
const mongoose = require('mongoose')
const connectTo = 'mongodb://' 
+ process.env.MONGO_DOMAIN + ':' 
+ process.env.MONGO_PORT + '/' 
+ process.env.MONGO_DB
mongoose.connect(
  connectTo, 
  {
    "useNewUrlParser" : true,
    "useUnifiedTopology" : true,
    "user" : process.env.MONGO_USER,
    "pass" : process.env.MONGO_PASSWORD,
  }
)

// アクセスログは access.log へ出力
const fs = require('fs')
const logger = require('morgan')
const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(logger('combined', {stream: accessLogStream}))


// body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// CROS
const cors = require('cors')
app.use(cors())

// router /api
const apiRoutes = require('./routes/api/index')
app.use('/api', apiRoutes)

// start server
app.listen(process.env.BACKEND_PORT || 3000)


