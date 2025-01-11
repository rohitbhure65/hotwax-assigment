    const mongoose = require('mongoose')
    const Customer = require('./customer')
    const Contact_Mech = require('./contact_mech')

    const Order_header_Schema = new mongoose.Schema({
        order_id: { type: mongoose.Schema.Types.ObjectId },
        order_date: { type: Date, default: Date.now },
        customer_id: { type: mongoose.Schema.Types.ObjectId, ref: Customer },
        shipping_contact_mech_id: { type: mongoose.Schema.Types.ObjectId, ref: Contact_Mech },
        billing_contact_mech_id: { type: mongoose.Schema.Types.ObjectId, ref: Contact_Mech }
    })


    const order_header = mongoose.model('order_header', Order_header_Schema)

    module.exports = order_header