const express = require('express')
const app = express()
const cors = require('cors')
const orderroutes = require('./routes/orders')
const dbconnection = require('./lib/dbconnect')

dbconnection()

const PORT = process.env.PORT || 8000
app.use(cors())
app.use('/', orderroutes.route)
app.use(express.json())

app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`);
})