'use strict';
// this is a singleton for the events class
const events = require('./src/events.js');
require('./src/model/vendor.js');
require('./src/model/driver.js');

events.on('pickup', (vendor)=>{
    console.log('-----------------------------------------------------------------------');
    console.log(`EVENT { event: 'pickup',`);
    console.log(vendor);
    console.log('');
});
events.on('in-transit', (order)=>{
    console.log(`DRIVER: picked up ${order.payload.orderID}`);
    console.log(`EVENT { event: 'in-transit',`);
    console.log(order);
    console.log('');
});
events.on('delivered', (order)=>{
    console.log(`Driver: delivered ${order.payload.orderID}`);
    console.log(`${order.payload.store}: Thank you for delivering ${order.payload.orderID}`);
    console.log(`EVENT { event: 'delivered',`);
    console.log(order);
    console.log('-----------------------------------------------------------------------');
    console.log('');
    console.log('');
});


