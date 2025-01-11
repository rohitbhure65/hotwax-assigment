const express = require('express')

const router = express.Router()
const ordercontroller = require('../controller/order') 

router
    .post('/orders', ordercontroller.createorder)
    .get('/orders/:order_id', ordercontroller.getorderdetails)

module.exports = router