const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    first_name: { type: String, required: true, maxlength: 50 },
    last_name: { type: String, required: true, maxlength: 50 }
});

module.exports = mongoose.model('customer', customerSchema);