const mongoose = require('mongoose')
require('dotenv').config()

const db = () => {
    mongoose.set('strictQuery', true)
    mongoose.set('strictPopulate', false)
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Mongodb Connecton successfull");
        })
        .catch(() => {
            console.log("Mongodb Connection unsccessfull");
        })
}

module.exports = db