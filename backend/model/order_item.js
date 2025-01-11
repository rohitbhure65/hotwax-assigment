const mongoose = require('mongoose')
const Order_Header = require('./order_header')
const Product = require('./product')

const orderItemSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'OrderHeader', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
    status: { type: String, required: true, maxlength: 20 }
});

module.exports = mongoose.model('order_item', orderItemSchema);