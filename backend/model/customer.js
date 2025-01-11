const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    first_name: { type: String, required: true, max: 50 },
    last_name: { type: String, required: true, max: 50 }
})

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer