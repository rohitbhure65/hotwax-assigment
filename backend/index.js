const express = require('express')
const app = express()
const cors = require('cors')
const orderroutes = require('./routes/orders')
const dbconnection = require('./lib/dbconnect')

dbconnection()
app.use(cors())
app.use(express.json())
app.use('/', orderroutes.route)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`);
})