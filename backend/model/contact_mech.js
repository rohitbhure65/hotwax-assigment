const mongoose = require('mongoose')
const Customer = require('./customer')

const contactMechSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    street_address: { type: String, required: true, maxlength: 100 },
    city: { type: String, required: true, maxlength: 50 },
    state: { type: String, required: true, maxlength: 50 },
    postal_Code: { type: String, required: true, maxlength: 20 },
    phone_number: { type: String, maxlength: 20 },
    email: { type: String, maxlength: 100 }
});

module.exports = mongoose.model('contact_mech', contactMechSchema);
