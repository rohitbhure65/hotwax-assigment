const mongoose = require('mongoose')
const Customer = require('./customer')
const Contact_Mech = require('./contact_mech')


const orderHeaderSchema = new mongoose.Schema({
    order_date: { type: Date, required: true, default: Date.now },
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    shipping_contact_mech_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact_Mech', required: true },
    billing_contact_mech_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact_Mech', required: true }
});

module.exports = mongoose.model('order_header', orderHeaderSchema);