const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = new express()
require('./middleware/mongodb')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
const api = require('./routes/api')
app.use('/api',api)

app.listen(3500,()=>{
    console.log("Server running at 3500")
})