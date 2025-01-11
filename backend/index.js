const app = require('express')
const dbconnection = require('./lib/dbconnect')

dbconnection()

const PORT = process.env.PORT || 8000


app.listen((PORT)=>{
    console.log(`server is running on port no ${PORT}`);
})