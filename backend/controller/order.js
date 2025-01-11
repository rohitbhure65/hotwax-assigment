const Order = require('../model/order_header')

// create order
exports.createorder = async (req, res) => {
    try {
        const { order_date, customer_id, shipping_contact_mech_id, billing_contact_mech_id, order_items } = req.body;

        const newOrder = new Order({
            order_date,
            customer_id,
            shipping_contact_mech_id,
            billing_contact_mech_id,
            order_items
        });

        const savedOrder = await newOrder.save();
        console.log(savedOrder);

        return res.status(201).json({ message: 'Order created successfully', order: savedOrder });
    } catch (error) {
        console.error('Error creating order:', error);
        return res.status(400).json({ message: 'bad req' });
    }
}

// get order details
exports.getorderdetails = async (req, res) => {
    try {
        const id = req.params.order_id
        const response = await Order.findById(id)
        // console.log(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: "order details not found" })
    }
}