const Order = require('../model/order_header')

exports.createorder = async (req, res) => {
    try {
        const { order_date, customer_id, shipping_contact_mech_id, billing_contact_mech_id, order_items } = req.body;


        if (!customer_id || !order_items || order_items.length === 0) {
            return res.status(400).json({ message: 'customer_id and order_items are required.' });
        }

        const newOrder = new Order({
            order_date,
            customer_id,
            shipping_contact_mech_id,
            billing_contact_mech_id,
            order_items
        });


        const savedOrder = await newOrder.save();

        return res.status(201).json({ message: 'Order created successfully', order: savedOrder });
    } catch (error) {
        console.error('Error creating order:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}