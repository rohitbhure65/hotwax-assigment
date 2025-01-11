const mongoose = require('mongoose')
const Customer = require('./customer')

const Contact_mechSchema = new mongoose.Schema({
    contact_mech_id: { type: mongoose.Schema.Types.ObjectId },
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: Customer },
    street_address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    phone_number: { type: String },
    email: { type: String }
})

const Contact_Mech = mongoose.model('Contact_mech', Contact_mechSchema)

module.exports = Contact_Mech