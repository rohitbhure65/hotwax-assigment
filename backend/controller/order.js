const Order = require('../model/order_header')

// create order
exports.createorder = async (req, res) => {
    try {
        const { customer_id, shipping_contact_mech_id, billing_contact_mech_id, order_items } = req.body;

        if (!customer_id || !shipping_contact_mech_id || !billing_contact_mech_id || !order_items) {
          return res.status(400).json({ message: 'Missing required fields' });
        }  

        const newOrder = new Order({
            customer_id,
            shipping_contact_mech_id,
            billing_contact_mech_id,
            order_items
        });

        const savedOrder = await newOrder.save();

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
        const response = await Order.findById(id).populate('contact_mech').populate('customer')

        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: "order details not found" })
    }
}