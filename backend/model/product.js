const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true, maxlength: 100 },
    color: { type: String, maxlength: 30 },
    size: { type: String, maxlength: 10 }
});

module.exports = mongoose.model('product', productSchema);