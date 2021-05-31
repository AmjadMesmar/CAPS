'use strict';

const events = require('../events.js');
const faker =  require('faker');

function vendor(event) {
    // const vendorTimer = setInterval(() => {
        let time = `${faker.date.soon()}`;
        let store = `${faker.company.companyName()} ${faker.name.jobArea()}`;
        let orderId = faker.datatype.uuid();
        let customer = `${faker.name.prefix()} ${faker.name.findName()}`;
        let address = `${faker.address.streetName()},${faker.address.city()}`;
    
     event = {
        time: time,
    
        payload: {
            store: store,
            orderID: orderId,
            customer: customer,
            address: address
        }
    }
    events.emit('pickup', event);

    // },1000);

}

const vendorTimer = setInterval(() => {
    vendor();
}, 5000);

setTimeout(()=> {
    clearInterval(vendorTimer);
}, 30000);



events.on('delivered',(order)=>{
    setTimeout(() => {
    
    }, 0);
   });


// module.exports = vendor;
