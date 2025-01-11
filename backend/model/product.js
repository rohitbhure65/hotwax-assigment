const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId },
    product_name: { type: String, required: true },
    color: { type: String },
    size: { type: String },
})


const Product = mongoose.model('Product', ProductSchema)

module.exports = Product