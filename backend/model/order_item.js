const mongoose = require('mongoose')
const Order_Header = require('./order_header')
const Product = require('./product')

const Order_Item_Schema = new mongoose.Schema({
    order_item_seq_id: { type: mongoose.Schema.Types.ObjectId },
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: Order_Header },
    proudct_id: { type: mongoose.Schema.Types.ObjectId, ref: Product },
    quantity: { type: Number, required: true },
    status: { type: String, required: true }
})

const Order_Item = mongoose.model('Order_Item', Order_Item_Schema)
module.exports = Order_Item