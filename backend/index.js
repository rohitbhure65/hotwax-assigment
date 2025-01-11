const express = require('express')
const cors = require('cors')
const app = express()

const dbconnection = require('./lib/dbconnect')

dbconnection()

const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json())



app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`);
})