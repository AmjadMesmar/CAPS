'use strict';

const events = require('../events.js');
// const vendorHandler = require('../model/vendor.js');

events.on('pickup',(vendor)=>{

    setTimeout(() => {
       events.emit('in-transit',vendor);
    }, 1000);

    setTimeout(() => {
        events.emit('delivered',vendor);
     }, 3000);
     
   });

